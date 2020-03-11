import firebase from '@/plugins/firebase';

export default function({ redirect, route, store }) {
  const user = firebase.auth().currentUser;
  console.log(user);
  if (!user && route.path !== '/') {
    redirect('/');
  }
}
