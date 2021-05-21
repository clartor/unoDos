import React, {Component} from 'react'
import { View, Text, StyleSheet,TextInput, Button } from 'react-native'
import { Formik } from 'formik'

import birthMonth from './screens/form'

export default class Dragmonth extends Component {

  constructor(){
    super();
    this.state={
      birthMonth : ''
    }
  }
  
  checkSwitch=(param)=>{
    switch(param) {
      case 'Januari':
      case 'Juli':
        this.One();
        break;
      case 'Februari':
      case 'Augusti':
        this.Two();
        break;
      case 'Mars':
      case 'September':
        this.Three();
        break;
        case 'April':
        case 'Oktober':
        this.Four();
        break;
      case 'Maj':
      case 'November':
        this.Five();
        break;
      case 'Juni':
      case 'December':
        this.Five();
        break;
      default:
        Alert.alert("Månad finns inte");
      }
  }
  One=()=>{
    console.log("Miss");
  }
  Two=()=>{
    console.log("Mrs");
  }
  Three=()=>{
    console.log("Lady");
  }
  Four=()=>{
    console.log("Dame");
  }
  Five=()=>{
    console.log("Madame");
  }
  Six=()=>{
    console.log("");
   }
   render() {
  
  return (
    <Formik
      initialValues={{birthMonth:'', password:''}}
      onSubmit={(values) => console.log('submitted', values)}
    >
      {({handleChange, handleSubmit, values})=>(
        <View>
          <Text>Födelsemånad</Text>
            <TextInput
              style={styles.input}
              value={values.birthMonth}
              onChangeText={handleChange('birthMonth')}
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
  )
}}
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  }
})