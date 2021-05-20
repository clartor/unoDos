import React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { Formik } from 'formik'

const Form = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go home ur drunk"
        onPress={() => navigation.navigate('List')
        } />

<Formik
      initialValues={{username:'', password:''}}
      onSubmit={(values) => console.log('submitted', values)}
    >
      {({handleChange, handleSubmit, values})=>(
        <View>
          <Text>Username</Text>
          <TextInput
            style={styles.input}
            value={values.username}
            onChangeText={handleChange('username')}
          />
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry={true}
            />
          <Button onPress={handleSubmit} title="Submit"/>
        </View>
      )}
    </Formik>

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
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white'
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});


export default Form
