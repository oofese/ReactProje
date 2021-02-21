import React from 'react';
import { StyleSheet, View,Text,TouchableOpacity } from 'react-native';

export default function FlatButton({text,onPress}) {

return (
    <TouchableOpacity onPress={onPress}>

        <View style={styles.button}>
    
         <Text style={StyleSheet.buttonText}>{ text }</Text>
        </View>
    </TouchableOpacity>
   
)
}
const styles=StyleSheet.create({
button: {
borderRadius:8,
paddingVertical:12,
paddingHorizontal:32,
marginTop:32,
height:50,
width:130,
backgroundColor:'green',
alignSelf:"stretch",

},
buttonText : {

    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:16,
    textAlign:'center',
    justifyContent:'center'
}
}
);