import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

const Stack = createStackNavigator();

import listScreen from './screens/list'
import formScreen from './screens/form'

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={listScreen}
          options={{ title: 'List' }}
        />
        <Stack.Screen
          name="Form"
          component={formScreen}
          options={{ title: 'Please enter information' }}
        />
      </Stack.Navigator>
      <View style={styles.container}>
        <SafeAreaView>
        </SafeAreaView>
      </View>
    </NavigationContainer>
  );r
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
});
export default App