import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  query,
  collection,
  where,
  orderBy,
  getDocs,
} from 'firebase/firestore';
import {
  actionCodeSettingsForgotPassword,
  firebaseConfig,
} from './firebase-config';
import { actionCodeSettingsVerification } from './firebase-config';

const app = initializeApp(firebaseConfig);

export const createUserProfileDocument = async userAuth => {
  if (!userAuth || !userAuth.emailVerified) return;
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(firestore, `users/${userAuth.uid}`), {
        displayName: displayName || localStorage.getItem('username'),
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

export const createUser = (email, password, displayName) =>
  createUserWithEmailAndPassword(auth, email, password).then(userCredential =>
    sendEmailVerification(
      userCredential.user,
      actionCodeSettingsVerification
    ).then(() => {
      alert(`Mensaje de verificación enviado al mail ${email} `);
      localStorage.setItem('username', displayName);
    })
  );

export const signInUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const resetPassword = email =>
  sendPasswordResetEmail(auth, email, actionCodeSettingsForgotPassword).then(
    () => alert(`Mail de recupero de contraseña enviado a ${email} `)
  );

export const createOrderDocument = async order => {
  if (!order) return;
  const orderRef = doc(firestore, `orders/${order.orderId}`);
  const snapShot = await getDoc(orderRef);

  if (!snapShot.exists()) {
    const createdAt = new Date();

    try {
      await setDoc(doc(firestore, `orders/${order.orderId}`), {
        userId: order.userId,
        shippingDetails: {
          ...order.shippingDetails,
        },
        items: [...order.cartItems],
        price: order.price,
        shippingCost: order.shippingCost,
        total: order.total,
        status: 'pending',
        createdAt,
      });
    } catch (error) {
      console.log('Error creating order', error.message);
    }
  }
  return orderRef;
};

export const getOrders = async userId => {
  if (!userId)
    throw new Error(
      'Upss, algo salío mal. No hay ordenes sin usuario, es como querer jugar al fútbol sin una pelota'
    );

  const getOrdersQuery = query(
    collection(firestore, 'orders'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  let orders = await getDocs(getOrdersQuery)
    .then(querySnapshot => {
      let orders = [];
      querySnapshot.forEach(doc => {
        console.log('doc: ' + doc);
        orders = [...orders, { id: doc.id, ...doc.data() }];
      });
      return orders;
    })
    .catch(error => console.error('Error al obtener las ordenes', error));

  return orders;
};

export const firestore = getFirestore(app);

export const auth = getAuth();
auth.useDeviceLanguage();

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
