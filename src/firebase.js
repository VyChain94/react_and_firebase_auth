//create app
import {initializeApp} from "firebase/app"
//authentication kit
import { getAuth} from "firebase/auth";

const firebaseConfig = ({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});

//create app w/ credentials
const app = initializeApp(firebaseConfig);
//authentication kit w/ our app
export const auth = getAuth(app);
export default app