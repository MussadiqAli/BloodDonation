
import React, { useState, useEffect } from 'react';
import {StyleSheet, ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import Navigation from './src/config/Navigation'
import SplashScreen from 'react-native-splash-screen'



GoogleSignin.configure({
  webClientId: '550774152496-lsl4gb5j6igtein3nd3t59hhbp8aaket.apps.googleusercontent.com',
});

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    SplashScreen.hide();
    })


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    async function onGoogleButtonPress() {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
    
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    }
    return (
      <View style={styles.main}> 
        <Image style={{width: 120, height: 100, marginBottom: 50 }} source={require('./src/assets/icon.png')}/>
        <TouchableOpacity
          onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
          style={{backgroundColor: '#CC0000', padding: 10, }}
        >
          <Text style={{color: '#fff',}}>Sign-In with Google</Text>
        </TouchableOpacity>

        
      </View>
    );
  }

  const logOut =()=>{
    
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }

  return (
    
    <Navigation user={user}/>
    
  );
  
};

const styles = StyleSheet.create({
  main:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7cbcb',
   
  }
});

export default App;


