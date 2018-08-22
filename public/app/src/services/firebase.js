import firebase from 'firebase'

const store = firebase.initializeApp({
  apiKey: 'AIzaSyCUXUYofsSahjDZFua-0l6eW8MMgpIvzkI',
  databaseURL: 'https://react-todo-7f184.firebaseio.com/',
  projectId: 'react-todo-7f184',
}).firestore();

store.settings({timestampsInSnapshots: true});

const subjectsCollection = store.collection("subjects");

export default {
  onUpdate(func) {
    subjectsCollection.onSnapshot((snapshot) => func(snapshot.docs.map(doc => Object.assign(doc.data(), {id: doc.id}))));
  }
}
