import React, { useState, useEffect } from 'react';
import { StatusBar, SafeAreaView, View, Text, ActivityIndicator } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

// Importations futures :
// import { Provider as ReduxProvider } from 'react-redux';
// import { store } from './store';
// import MainNavigator from './navigation/MainNavigator';
// import AuthNavigator from './navigation/AuthNavigator';
// import { auth } from './services/firebase/config';
// import { onAuthStateChanged } from 'firebase/auth';
// import { theme } from './themes/default';

/**
 * Composant principal de l'application
 * 
 * À terme, ce composant contiendra:
 * - La configuration du thème
 * - La gestion de l'état d'authentification
 * - La navigation
 * - Les providers globaux (Redux, etc.)
 */
const App = () => {
  // État pour suivre si l'utilisateur est connecté
  const [user, setUser] = useState(null);
  
  // État pour suivre si l'application est en cours de chargement
  const [isLoading, setIsLoading] = useState(true);

  // Simulation d'un chargement initial
  useEffect(() => {
    // Ici, nous simulerons un délai de chargement
    // À terme, ce sera remplacé par la vérification de l'état d'authentification
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Simuler un utilisateur non connecté pour l'instant
      setUser(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // À terme, ce useEffect sera utilisé pour vérifier l'état d'authentification
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setIsLoading(false);
  //   });
  //
  //   return unsubscribe;
  // }, []);

  // Afficher un indicateur de chargement pendant l'initialisation
  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#357a38' }}>
        <StatusBar barStyle="light-content" backgroundColor="#357a38" />
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={{ marginTop: 20, color: '#ffffff', fontSize: 16 }}>
          Chargement de Football Coach...
        </Text>
      </SafeAreaView>
    );
  }

  // Application principale
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#357a38" />
        
        {/* Placeholder pour la navigation à terme */}
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
            Football Coach App
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 30 }}>
            Bienvenue dans l'application de gestion pour les coaches de football.
          </Text>
          <Text style={{ textAlign: 'center', marginBottom: 10 }}>
            Cette application est en cours de développement.
          </Text>
          <Text style={{ textAlign: 'center', color: '#666' }}>
            Version 0.1.0
          </Text>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
