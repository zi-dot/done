import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

export default (context, inject) => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: context.app.$env.FIREBASE_API_KEY,
      authDomain: context.app.$env.FIREBASE_AUTH_DOMAIN,
      databaseURL: context.app.$env.FIREBASE_DATABASE_URL,
      projectId: context.app.$env.FIREBASE_PROJECT_ID,
      storageBucket: context.app.$env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: context.app.$env.FIREBASE_MESSAGING_SENDER_ID,
      appId: context.app.$env.FIREBASE_APP_ID,
      measurementId: context.app.$env.FIREBASE_MEASUREMENT_ID
    });
  }

  inject('firebase', firebase);
  inject('firestore', firebase.firestore());
  inject('auth', firebase.auth());

  return firebase;
};
