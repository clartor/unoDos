import React, { Component } from 'react';
 
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { Formik } from 'formik'
import Dragmonth from '../month'

const Form = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ birthMonth: '', firstName: '', lastName: '' }}
        onSubmit={(values) => console.log('submitted', values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.form}>

            <Text>Födelsemånad</Text>
            <TextInput
              style={styles.input}
              value={values.birthMonth}
              onChangeText={handleChange('birthMonth')}
            />
            <Text>Förnamn</Text>
            <TextInput
              style={styles.input}
              value={values.firstName}
              onChangeText={handleChange('firstName')}
            // secureTextEntry={true}
            />
            <Text>Efternamn</Text>
            <TextInput
              style={styles.input}
              value={values.lastName}
              onChangeText={handleChange('lastName')}
            // secureTextEntry={true}
            />
            <Button style={styles.button} onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>

    </View>
  )
}

// 437/600
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    width: '50%', 
    height: 800,
    alignSelf: 'center'
    // padding: 15,
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
  },
  form: {
    padding: 15
  },
});


export default Form
