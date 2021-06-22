import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBOW0lRVa00NGVRm7eOxqoq2y35TpT04sA',
  authDomain: 'ohn-wai.firebaseapp.com',
  databaseURL:
    'https://ohn-wai-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ohn-wai',
  storageBucket: 'ohn-wai.appspot.com',
  messagingSenderId: '794191542556',
  appId: '1:794191542556:web:9851b7cb882ac72715a2d9'
}
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
