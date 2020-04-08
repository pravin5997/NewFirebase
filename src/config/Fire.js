import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB7iI650g0jFj8V0svlyAQM__sGijNV34M",
    authDomain: "leave-request-de184.firebaseapp.com",
    databaseURL: "https://leave-request-de184.firebaseio.com",
    projectId: "leave-request-de184",
    storageBucket: "leave-request-de184.appspot.com",
    messagingSenderId: "306190681826",
    appId: "1:306190681826:web:423e27aaef0dae56ca80bb",
    measurementId: "G-GKF1TW26T8"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;