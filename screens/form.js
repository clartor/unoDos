import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { Formik } from 'formik'

const Form = () => {

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ firstName: '', smekNamn: '', spel: '', hemlis: '' }}
        onSubmit={(values) => alert('Thank You ' + values.smekNamn + ', your secret is safe with me')}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.form}>
            <Text>Förnamn</Text>
            <TextInput
              style={styles.input}
              value={values.firstName}
              onChangeText={handleChange('firstName')}
            />
            <Text>Smeknamn</Text>
            <TextInput
              style={styles.input}
              value={values.smekNamn}
              onChangeText={handleChange('smekNamn')}
            />
            <Text>Favorit spel</Text>
            <TextInput
              style={styles.input}
              value={values.spel}
              onChangeText={handleChange('spel')}
            />
            <Text>Berätta en hemlis!</Text>
            <TextInput
              style={styles.input}
              value={values.hemlis}
              onChangeText={handleChange('hemlis')}
              secureTextEntry={true}
            />
            <Button style={styles.button} onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignSelf: 'center'
  },
  itemStyle: {
    padding: 15,
  },
  textInputStyles: {
    height: 20,
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
    padding: 15,
    fontSize: 80
  },
  button: {
    borderColor: 'black'
  }
});


export default Form
