import firebase from 'firebase';
import firestore from 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyBPBlE0khy6FfZ4a7c92mDHB1UzKjDgJHE',
    authDomain: 'ninja-chat-f7992.firebaseapp.com',
    databaseURL: 'https://ninja-chat-f7992.firebaseio.com',
    projectId: 'ninja-chat-f7992',
    storageBucket: 'ninja-chat-f7992.appspot.com',
    messagingSenderId: '477955042653',
    appId: '1:477955042653:web:1f9b912aa4a5a6f6d8ccb4',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore();
