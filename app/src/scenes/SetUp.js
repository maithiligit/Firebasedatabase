import * as React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD_-u3_LzrFGSH9IE14FtIXRr8PjlHig2s',
  authDomain: 'fir-mob-auth-891bd.firebaseapp.com',
  projectId: 'fir-mob-auth-891bd',
  storageBucket: 'fir-mob-auth-891bd.appspot.com',
  messagingSenderId: '215676039421',
  appId: '1:215676039421:web:fb7bc2bb95fc81e5728e94',
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export default () => {
  return firebase, auth;
};
