//----------------------------------------------------------------
//firebaseの設定
//----------------------------------------------------------------
import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyCLosJDFaOOR-B9SQZU9D1uVk9j03-BROU",
  authDomain: "vuetest-46bd6.firebaseapp.com",
  projectId: "vuetest-46bd6",
  storageBucket: "vuetest-46bd6.appspot.com",
  messagingSenderId: "548174328373",
  appId: "1:548174328373:web:a0dc23c6c782d3758ff77c",
  measurementId: "G-RQBBEQ6FSL"
};
firebase.initializeApp(firebaseConfig)
//----------------------------------------------------------------

export default firebase
