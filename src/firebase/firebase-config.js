export const firebaseConfig = {
  apiKey: 'AIzaSyA4zqGd_5yyfbuCyEXqIz2E-b6fNl2VK9M',
  authDomain: 'nucbazappi1617.firebaseapp.com',
  projectId: 'nucbazappi1617',
  storageBucket: 'nucbazappi1617.appspot.com',
  messagingSenderId: '742904554044',
  appId: '1:742904554044:web:4b1592aae439ae20755939',
};

export const actionCodeSettingsVerification = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'linkDeProducción',
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/login'
      : 'linkDeProducción',
};
