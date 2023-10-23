import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image, SafeAreaView, TouchableOpacity, Alert , Dimensions} from 'react-native';
import db from './config';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";

import { Entypo } from '@expo/vector-icons';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      secureTextEntry: true,
    };
  }

  changeSecureText = () => {
    this.setState({ secureTextEntry: !this.state.secureTextEntry });
  }

  login = async (email, password) => {
    console.log("hi");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('DashboardScreen');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    return (
      <View style={stylus.container}>
        <SafeAreaView>
          <Image style={{ width: 200, height: 200, marginTop: screenHeight/17, alignSelf: "center", marginBottom: RFValue(50) }} source={require('../assets/digi.png')}></Image>
          <View>
            <TextInput
              style={stylus.textinput}
              onChangeText={(text) => {
                this.setState({ emailId: text });
              }}
              placeholder="Email"
              placeholderTextColor="white"
            />
            <TouchableOpacity disabled={true} style={{ marginTop: RFValue(23), marginLeft: RFValue(-40) }}>
              <Image style={{ width: 45, height: 45, marginTop: RFValue(-69), marginLeft: RFValue(47), paddingBottom: RFValue(20) }} source={require('../assets/email.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <TextInput
                style={stylus.textinput} // Use the same style for the password field
                onChangeText={text => this.setState({ password: text })}
                placeholder={"Password"}
                placeholderTextColor={"#FFFFFF"}
                secureTextEntry={this.state.secureTextEntry}
              />
              <TouchableOpacity disabled={true} style={{ marginTop: RFValue(23), marginLeft: RFValue(-40) }}>
                <Image style={{ width: 45, height: 45, marginTop: RFValue(-66), marginLeft: RFValue(45), paddingBottom: RFValue(20) }} source={require('../assets/password.png')}></Image>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ marginTop: RFValue(28), marginLeft: RFValue(-40) }} onPress={this.changeSecureText}>
              {this.state.secureTextEntry ? <Entypo name="eye-with-line" size={RFValue(27)} color="white" /> : <Entypo name="eye" size={RFValue(27)} color="white" />}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[stylus.button, { marginTop: RFValue(5) }]}
            onPress={() => this.login(this.state.emailId, this.state.password)}
          >
            <Image style={{ width: RFValue(200), height: RFValue(60), marginTop: RFValue(30), marginBottom: RFValue(5) }} source={require('../assets/login7.png')}></Image>
          </TouchableOpacity>

<Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
  <TouchableOpacity onPress={() => {
    this.props.navigation.navigate("SignUp");
  }}>
           
           <View style={{ flexDirection: 'row', justifyContent: "center" }}>
  <Text style={{ color: "black" }}>Not a member?</Text>
    <Text style={{ color: "purple", fontWeight: "bold" }}>Sign Up</Text></View>
  </TouchableOpacity>
  <TouchableOpacity style={{justifyContent:"center"}} onPress={() => {
    this.props.navigation.navigate("ResetPassword");
  }}>
           
  <Text style={{ color: "black" ,textAlign:"center",marginTop:RFValue(5)}}>Forgot your password?</Text>
  </TouchableOpacity>



        </SafeAreaView>
      </View>
    );
  }
}

const stylus = StyleSheet.create({
  input: {
    backgroundColor: "purple",
    color: 'white',
    marginTop: RFValue(20),
    height: RFValue(40),
    margin: RFValue(10),
    borderRadius: RFValue(5),
  },
  inputs: {
    backgroundColor: "purple",
    color: 'white',
    marginBottom: RFValue(5),
    marginTop: RFValue(0),
    margin: RFValue(10),
    height: RFValue(40),
    borderRadius: RFValue(5),
  },
  image: {
    alignSelf: 'center',
    width: RFValue(200),
    height: RFValue(200),
  },
  textinput: {
    width: RFValue(290),
    height: RFValue(50),
    padding: RFValue(5),
    marginTop: RFValue(15),
    borderColor: "#",
    borderWidth: RFValue(2),
    borderRadius: RFValue(10),
    fontSize: RFValue(15),
    color: "#FFFFFF",
    backgroundColor: "#800080",
    alignSelf: "center",
    paddingLeft: RFValue(60),
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    height:screenHeight,
    width:screenWidth,
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
    alignSelf: "center",
  },
});
