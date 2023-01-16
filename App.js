import { Text,View,StyleSheet,SafeArea, FlatList } from 'react-native';
import React, { useState } from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer,DefaultTheme} from "@react-navigation/native";
import { useFonts } from 'expo-font'
import Home from './screens/Home';
import Details from './screens/Details';
const Stack = createNativeStackNavigator();
const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"transparent"
  }
}
const App = () => {
 
  return ( 
    <>
    
   <NavigationContainer theme={theme} >
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
   </NavigationContainer>


    </>
   );
}
 
export default App;


const styles = StyleSheet.create({
  container:{
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    // backgroundColor:'red',
  }
})