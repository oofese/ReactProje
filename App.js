import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput,KeyboardAvoidingView,Keyboard} from 'react-native';
import FlatButton from './Components/Button'
import { FontAwesome } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-community/async-storage';

export default class  App extends React.Component {

  saveData =()=>{
    const {fname,lname,company}=this.state;
    let myArray={
    fname:fname,
    lname:lname,
    company:company
      }
  
  AsyncStorage.setItem('myArray',JSON.stringify(myArray)); 
  Keyboard.dismiss();
  
 // kisiler.push(AsyncStorage.getItem('myArray')); 
  alert("Kaydedildi");
  }
  showData = async()=>{

      let myArray=await AsyncStorage.getItem('myArray');
      let d=JSON.parse(myArray);
      alert(d.fname+' '+d.lname+'\n'+d.company);

  }
  render () {
  return(

    <KeyboardAvoidingView 
    style={styles.container}
    behaivor="height"
    >
            <FontAwesome name="user-circle-o" size={120} color="black" />
            <TextInput style={styles.input}  
            autoCorrect={false}
            placeholder="İsim"
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            clearButtonMode="always"
            onChangeText={fname => this.setState({fname})}
            />
             
            <TextInput style={styles.input}
            autoCorrect={false}
            placeholder="Soyisim"
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            clearButtonMode="always"
            onChangeText={lname => this.setState({lname})}
            />

            <TextInput style={styles.input}
            autoCorrect={false}
            placeholder="Şirket"
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            clearButtonMode="always"
            onChangeText={company => this.setState({company})}
               
            />
          <FlatButton  text='Kaydet' onPress={this.saveData}/>
          <FlatButton  text='Listele' onPress={this.showData}/>
  
    </KeyboardAvoidingView>
  );
}
}
const styles=StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },

  input : {
      borderWidth:1,
      borderColor:'#777',
      padding:8,
      margin:10,
      width:200,          
  }
  }
  );
