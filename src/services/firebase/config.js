/**
 * Configuration Firebase pour l'application Football Coach
 * 
 * Note: Remplacer les valeurs par les vôtres lors de la création du projet Firebase.
 * Ces valeurs sont des placeholders.
 */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

// Configuration Firebase (à remplacer par vos propres identifiants)
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "football-coach-app.firebaseapp.com",
  projectId: "football-coach-app",
  storageBucket: "football-coach-app.appspot.com",
  messagingSenderId: "VOTRE_MESSAGING_SENDER_ID",
  appId: "VOTRE_APP_ID",
  measurementId: "VOTRE_MEASUREMENT_ID"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Services Firebase
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);

export { app, auth, firestore, storage, functions };

/**
 * Instructions pour configurer Firebase:
 * 
 * 1. Créez un compte Firebase si vous n'en avez pas déjà un: https://firebase.google.com/
 * 2. Créez un nouveau projet Firebase
 * 3. Ajoutez une application web à votre projet Firebase
 * 4. Copiez les informations de configuration fournies
 * 5. Remplacez les valeurs dans ce fichier par vos informations
 * 6. Activez Authentication, Firestore, Storage et Functions dans la console Firebase
 * 
 * Pour plus d'informations sur la configuration de Firebase, consultez:
 * https://firebase.google.com/docs/web/setup
 */
