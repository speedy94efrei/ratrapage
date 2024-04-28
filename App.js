// App.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

import Home from './screen/home';
import Perso from './screen/perso';
import Propos from './screen/mail';


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Characters" component={Perso} />
        <Tab.Screen name="Contact" component={Propos} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Gris clair
  },
});

export default App;
