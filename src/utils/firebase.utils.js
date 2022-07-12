import { initializeApp } from 'firebase/app';

import { getAuth,
    signInWithRedirect,
     signInWithPopup,
      GoogleAuthProvider,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged,

     } from 'firebase/auth';

import { getFirestore,
         doc,
         getDoc,
         setDoc,
         collection,
         writeBatch, 
         query,
         getDocs
      } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC6YgANew3filFJ77anyCpoicCQUYzGTnI",
    authDomain: "klotville-db.firebaseapp.com",
    projectId: "klotville-db",
    storageBucket: "klotville-db.appspot.com",
    messagingSenderId: "598793997531",
    appId: "1:598793997531:web:2864d9108dfc29d05f50fe"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

  export const db = getFirestore();
  
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object)=> {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done')

  };

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'cartegories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) =>{
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})

    return categoryMap;

  }




  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
      if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword= async(email, password)=>{

    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  }


  export const signInAuthUserWithEmailAndPassword= async(email, password)=>{

    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const onAuthStateChangedListener = (callback)=>
  onAuthStateChanged(auth, callback)

  export const signOutUser = async() => await signOut(auth);