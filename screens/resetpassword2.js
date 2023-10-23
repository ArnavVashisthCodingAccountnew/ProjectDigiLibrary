import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';

export default class ResetPassword extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      emailId: '',
      password: '',
      countdown: 180, // 3 minutes in seconds,
    // email: this.props.route.params.emailToPass,
    };
    
  }

  componentDidMount() {
    this.startCountdown();
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      if (this.state.countdown > 0) {
        this.setState({ countdown: this.state.countdown - 1 });
      } else {
        clearInterval(this.countdownInterval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  render() {
    const { navigation } = this.props;
    const email = navigation.getParam('emailToPass', 'No ID');
    return (
      <View style={stylus.container}>
        <SafeAreaView>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: RFValue(16) }}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("ResetPassword");
            }} style={{ marginLeft: 14 }}>
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                size={RFValue(26)}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              alert("The Reset Password email will be sent to your email id. Please click the link provided in the email to reset the password. The email may go in the spam folder, so please double-check.")
            }} style={{ marginRight: RFValue(10) }}>
              <AntDesign name="questioncircleo" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <Image style={{ width: 200, height: 200, marginTop: RFValue(44), alignSelf: "center" }} source={require('../assets/confetti.png')}></Image>
          <Text style={stylus.txt}>Make sure That's you</Text>
          <Text style={stylus.smalltxt}>Please check your inbox, make sure that it is you or not and reset the password.</Text>
          <View style={{ flexDirection: 'row', justifyContent: "center" }}>
            <Text style={stylus.midtxt}>Confirm within </Text>
            <Text style={stylus.countdown}>
              {`${Math.floor(this.state.countdown / 60).toString().padStart(2, '0')}:${(this.state.countdown % 60).toString().padStart(2, '0')}`}
            </Text>
          </View>
          <View>
            <Text style={stylus.disabledsmalltxt}>Did you receive this email? Check your inbox or</Text>
            <TouchableOpacity onPress={() => {
              if (email != "") {
                firebase
                  .auth()
                  .sendPasswordResetEmail(email)
                  .then(() => {
                    Alert.alert('Password reset email sent!');
                    // this.setState({
                    //   email: ''
                    // })
                  })
                  .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    Alert.alert(errorMessage);
                  });
                this.props.navigation.navigate("R2");
              } else {
                alert("Please fill in the email");
              }
            }}>
              <Text style={stylus.o}>Resend Email</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}


const stylus = StyleSheet.create({
txt:{
fontSize:RFValue(20),
selfAlign:"center",
fontWeight:"bold",
justifyContent:"center",
textAlign:"center"
},
midtxt:{
  fontSize:RFValue(16),
  selfAlign:"center",
  justifyContent:"center",
  textAlign:"center",
  marginTop:RFValue(20),
},
smalltxt:{
  fontSize:RFValue(11),
  marginTop:RFValue(7),
  selfAlign:"right",
  textAlign:"center"
  },
  disabledsmalltxt:{
    fontSize:RFValue(11),
    marginTop:RFValue(187),
    selfAlign:"center",
    textAlign:"center"
    },
    o:{
      fontSize:RFValue(11),
      selfAlign:"left",
      textAlign:"center",
      color:"#0000EE"
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
countdown: {
  fontSize: RFValue(18),
  fontWeight: "bold",
  color: 'purple',
  marginTop: RFValue(18),
},
})