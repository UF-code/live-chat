import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD7OvHrZznx695Gn6j3m9fT5fVpiMrx_zQ',
  authDomain: 'udemy-vue-firebase-sites-70910.firebaseapp.com',
  projectId: 'udemy-vue-firebase-sites-70910',
  storageBucket: 'udemy-vue-firebase-sites-70910.appspot.com',
  messagingSenderId: '679903118906',
  appId: '1:679903118906:web:884481d9e4356a54a89703',
}

//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }
