import firebase from 'firebase/app'
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyCmgBq2QMRftNJqmXP2qWQ6MpT-MpboBEY",
    authDomain: "vue-memo-app-fae43.firebaseapp.com",
    projectId: "vue-memo-app-fae43",
    storageBucket: "vue-memo-app-fae43.appspot.com",
    messagingSenderId: "936166349205",
    appId: "1:936166349205:web:8a70c54b87dbadf6ea7e9c"
  };

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })