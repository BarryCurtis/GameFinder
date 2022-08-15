import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaj-H8eH5dwDz0cCDdIzOBlYeiNzywxRc",
  authDomain: "todo-app-168fb.firebaseapp.com",
  projectId: "todo-app-168fb",
  storageBucket: "todo-app-168fb.appspot.com",
  messagingSenderId: "792346719343",
  appId: "1:792346719343:web:e83f77d00fbf773db1099a",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

