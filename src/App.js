import React, { useEffect } from 'react';
import Routes from './routes/Routes';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import * as userActions from './Redux/user/user-actions';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function onAuthStateChange(cb, action) {
  onAuthStateChanged(auth, async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      onSnapshot(userRef, snapShot =>
        cb(action({ id: snapShot.id, ...snapShot.data() }))
      );
    } else {
      cb(action(null));
    }
  });
}

function App() {
  const dispatch = useDispatch();

  useEffect(
    () => onAuthStateChange(dispatch, userActions.setCurrentUser),
    [dispatch]
  );

  return (
    <Layout>
      <Navbar />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
