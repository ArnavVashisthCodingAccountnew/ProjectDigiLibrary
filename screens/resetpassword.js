import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image , SafeAreaView, TouchableOpacity,Alert,Dimensions} from 'react-native';
import db from './config';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { AntDesign } from '@expo/vector-icons'; 
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export default class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      email:'',
    };
  
  }


  


  render() {
    return (
      <View style={stylus.container}>
    <SafeAreaView>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:screenHeight/18}}>
      <TouchableOpacity   onPress={()=>{
        this.props.navigation.navigate("Login")
      }} style={{marginLeft:14}}><FontAwesomeIcon
        icon={faArrowLeftLong}
        size={RFValue(26)}
    
  
      /></TouchableOpacity>
      <TouchableOpacity onPress={()=>{
       alert("The Reset Password email will be sent to your email id. Please click link provided in email to reset the password. The email may go in spam folder so please double check.")
      }} style={{marginRight:RFValue(10)}}><AntDesign name="questioncircleo" size={25} color="black" /></TouchableOpacity>
      </View>
   <Text style={stylus.txt}>Reset Password</Text>
   <Text style={stylus.smalltxt}>Enter the email address with which you made the account and we'll send an email with conformation to reset your password.</Text>
   <TextInput
        style={stylus.textinput}
        value={this.state.email}
        onChangeText={(god)=>{
          this.setState({
            email:god,
          })
        }}
        placeholder="example124@gmail.com"
        placeholderTextColor="#C5B4E3"
        keyboardType="email-address"
      />
      <TouchableOpacity
  style={{
    width: RFValue(326), // Set the width as needed
    height: RFValue(50), // Set the height as needed
    backgroundColor: '#800080', // Purple color
    borderRadius: RFValue(25), // Half of the height for rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:RFValue(40),
    alignSelf:"center"
  }}
  onPress={() => {
    if(this.state.email != ""){

    
    firebase
                .auth()
                .sendPasswordResetEmail(this.state.email)
                .then(() => {
                  Alert.alert('Password reset email sent!');
                  // ..
                  this.setState({
                    email:''
                  })
                 
                })
                .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;

                  Alert.alert(errorMessage);
                })
   this.props.navigation.navigate("R2", {
    emailToPass: this.state.email});

              }
              else{
                alert("Please fill the email")
              }
  }}
>
  <Text style={{ color: 'white', fontSize: RFValue(18) }}>Continue</Text>
</TouchableOpacity>
          </SafeAreaView>

      </View>
    );
  }
}

const stylus = StyleSheet.create({
txt:{
fontSize:RFValue(20),
marginTop:RFValue(16),
selfAlign:"right",
marginLeft:RFValue(10),
fontWeight:"bold"
},
smalltxt:{
  fontSize:RFValue(11),
  marginTop:RFValue(25),
  selfAlign:"right",
  marginLeft:RFValue(10),
  },
input:{
backgroundColor : "purple",
color:'white',
marginTop:20,
height:40,
margin:10,
borderRadius:5

},
inputs:{
backgroundColor : "purple",
color:'white',
marginBottom:5,
marginTop:0,
margin:10,
height:40,
borderRadius:5

},
image:{
  alignSelf:'center',
  width:200,
  height:200,
},
textinput: {
  width: RFValue(326),
  height: RFValue(50),
  overflow: "hidden",
  padding: RFValue(5),
  marginTop: RFValue(15),
  borderWidth: RFValue(2),
  borderColor: 'rgba(0, 0, 0, 0.2)', // Light black boundary
  borderRadius: RFValue(78), // Adjust the radius for rounded borders
  fontSize: RFValue(15),
  color: '#000', // Text color (black)
  backgroundColor: '#F8F8F8', // Background color
  alignSelf: 'center',
  paddingLeft: RFValue(15)
},

disabledtextinput: {
  width: RFValue(250),
  height: RFValue(40),
  padding: RFValue(5),
  marginTop: RFValue(15),
  borderColor: "#",
  borderWidth: RFValue(2),
  borderRadius: RFValue(10),
  fontSize: RFValue(15),
  color: "#FFFFFF",
  backgroundColor: "#800080",
  marginLeft:RFValue(-11),
},
container: {
  flex: 1,
  height:screenHeight,
  width:screenWidth,
  backgroundColor: "white",
 alignItems: "center",
},
button: {
  width: RFValue(250),
  height: RFValue(50),
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  borderRadius: RFValue(30),
  backgroundColor: "white",
  marginBottom: RFValue(20),
  alignSelf:"center"
},
})