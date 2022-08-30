/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {SafeAreaView, StyleSheet, Text} from 'react-native';
 import ApplicationScreen from './src/screens/ApplicationScreen';
 
 const App = () => {
   return (
     <SafeAreaView style={styles.root}>
       <ApplicationScreen />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   root: {
     flex: 1,
     backgroundColor: '#F9FBFC'
   } 
 });
 
 export default App;