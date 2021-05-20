import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Form = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button 
            title="Go home ur drunk"
            onPress={() => navigation.navigate('List')
            }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    itemStyle: {
      padding: 15,
    },
    textInputStyles: {
      height: 40,
      borderWidth:1,
      paddingLeft:20,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: 'white'
    }
  });
  

export default Form
