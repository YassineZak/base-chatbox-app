import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDjaADIcOTx-VONza3NYTpNs7Femrrk8Yw",
    authDomain: "chatbox-app-cf60d.firebaseapp.com",
    databaseURL: "https://chatbox-app-cf60d.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base