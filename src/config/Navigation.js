// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import {Image, Button, TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth';
import Donate from './DonatorForm'
import FindBlood from "./findBlood";





const Stack = createStackNavigator();

function Navigation(props) {
  
  var user = props.user
  const nm = user.displayName
  const img = user.photoURL

  const logOut =()=>{
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  
          name="Home" component={Home} initialParams={{pro: user}}
          options={{
            headerStyle:{backgroundColor: 'pink'}, 
            headerLeft: () => (
                    <Image
                    style={{width: 50, height: 50, borderRadius: 50, marginLeft: 6}}
                    source={{uri:img}}
                    />
                  ),
            title: nm,
            headerRight: () => (
              <TouchableOpacity
                onPress={()=> logOut()}
                style={{backgroundColor: '#CC0000', padding: 5, borderRadius: 5, marginRight:5}}
              >
                <Text style={{color: '#fff',}}>LogOut</Text>
              </TouchableOpacity>
            ),
          }}
        />
        
        <Stack.Screen 
          name="Donate" 
          component={Donate} 
          options={{
            headerStyle:{backgroundColor: 'pink'},
          }}
        />
        <Stack.Screen name="FindBlood" component={FindBlood}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;