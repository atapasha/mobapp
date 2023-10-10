import { View,Text,Platform ,Image,TextInput,StyleSheet } from "react-native";
 
function App(){

  return (
 
<View  style={styles.container}>
 
 
 <TextInput value="abc" style={styles.input} >

 </TextInput>


</View>

  );

}



const styles= StyleSheet.create({

  container:{

  flex:1,
  color:'white',
  justifyContent:'center',
  alignItems:'center',
  fontSize:40
 
},
  input:{
borderWidth:2,
height:40,
width:40,

margin:12,
padding:10,
fontSize:25,

color:'blue',

borderColor:'red'



  }



})


export default App;