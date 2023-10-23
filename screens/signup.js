import React, { Component } from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,
    Text,
} from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import db from './config';
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import { Entypo } from '@expo/vector-icons';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirmPassword: "",
            fontsLoaded: false,
            name: "",
            phonewithCC: "",
            secureTextEntry: true,
            errorMessage: "", // Added for error messages
        };
    }
    changeSecureText = ()=> {
        this.setState({secureTextEntry:!this.state.secureTextEntry})  
      }
    registerUser = (email, password, confirmPassword, name, phoneNumber) => {
        if (password === confirmPassword) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = firebase.auth().currentUser.uid
                    db.collection("users").add({
                        password: password,
                        email: email,
                        name: name,
                        phone: phoneNumber,
                        uid: firebase.auth().currentUser.uid,
                    });
                    alert("Welcome");
                    this.props.navigation.navigate("DashboardScreen");
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    this.setState({ errorMessage }); // Set error message
                });
        } else {
            this.setState({ errorMessage: "Passwords do not match" }); // Set error message
        }
    };

    render() {
        const { email, password, confirmPassword, name, phonewithCC } = this.state;

        return (
            <KeyboardAwareScrollView style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <Image style={{ width: 200, height: 200,marginTop:15,alignSelf:'center'}} source={require('../assets/digi.png')}></Image>
                 <View>
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ name: text })}
                    placeholder={"Name"}
                    placeholderTextColor={"#FFFFFF"}
                /><TouchableOpacity disabled={true} style={{marginTop:RFValue(23),marginLeft:RFValue(-40)}}><Image style={{ width: 45, height: 45,marginTop:RFValue(-66),marginLeft:RFValue(47),paddingBottom:RFValue(20)}} source={require('../assets/name.png')}></Image></TouchableOpacity>
                </View>
                <View>
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ email: text })}
                    placeholder={"Email"}
                    placeholderTextColor={"#FFFFFF"}
                    keyboardType="email-address"
                /><TouchableOpacity disabled={true} style={{marginTop:RFValue(23),marginLeft:RFValue(-40)}}><Image style={{ width: 45, height: 45,marginTop:RFValue(-66),marginLeft:RFValue(47),paddingBottom:RFValue(20)}} source={require('../assets/email.png')}></Image></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View>
                <TextInput
                    style={styles.textinputo }
                    onChangeText={text => this.setState({ password: text })}
                    placeholder={"Password"}
                    placeholderTextColor={"#FFFFFF"}
                    secureTextEntry={this.state.secureTextEntry}
                /><TouchableOpacity disabled={true} style={{marginTop:RFValue(23),marginLeft:RFValue(-30)}}><Image style={{ width: 45, height: 45,marginTop:RFValue(-66),marginLeft:RFValue(37),paddingBottom:RFValue(20)}} source={require('../assets/password.png')}></Image></TouchableOpacity>
                </View>
                <TouchableOpacity style={{marginTop:RFValue(17),marginLeft:RFValue(-40)}} onPress={this.changeSecureText}>
                    {this.state.secureTextEntry ? <Entypo name="eye-with-line" size={RFValue(27)} color="white" /> : <Entypo name="eye" size={RFValue(27)} color="white" />}
                </TouchableOpacity> 
                </View>
               
                <View>
                    
                <TextInput
                    style={styles.textinputo}
                    onChangeText={text => this.setState({ confirmPassword: text })}
                    placeholder={"Re-enter Password"}
                    placeholderTextColor={"#FFFFFF"}
                    secureTextEntry={this.state.secureTextEntry}
                /><TouchableOpacity disabled={true} style={{marginTop:RFValue(23),marginLeft:RFValue(-30)}}><Image style={{ width: 45, height: 45,marginTop:RFValue(-66),marginLeft:RFValue(37),paddingBottom:RFValue(20)}} source={require('../assets/password.png')}></Image></TouchableOpacity>
                </View>
                
                <View>
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ phonewithCC: text })}
                    placeholder={"Phone (with CC)"}
                    placeholderTextColor={"#FFFFFF"}
                    keyboardType='phone-pad'
                /><TouchableOpacity disabled={true} style={{marginTop:RFValue(23),marginLeft:RFValue(-30)}}><Image style={{ width: 45, height: 45,marginTop:RFValue(-66),marginLeft:RFValue(37),paddingBottom:RFValue(20)}} source={require('../assets/phone.png')}></Image></TouchableOpacity></View>
                <TouchableOpacity
                    style={[styles.button, { marginTop: 5 }]}
                    onPress={() => this.registerUser(email, password, confirmPassword, name, phonewithCC)}
                >
                    <Image style={{ width: 200, height: 60, marginTop: 30, marginBottom: 5 }} source={require('../assets/registersign.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Login")} style={{}}
                >
                    <Text style={styles.buttonTextNewUser}>Already a user? Login</Text>
                </TouchableOpacity>

                {/** Error message container */}
                {this.state.errorMessage !== "" && (
                    <View style={styles.errorMessageContainer}>
                        <Text style={styles.errorMessageText}>{this.state.errorMessage}</Text>
                    </View>
                )}
            </KeyboardAwareScrollView>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
       alignSelf: "center",
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0

    },
    appIcon: {
        width: RFValue(200),
        height: RFValue(200),
        resizeMode: "contain",
        marginBottom: RFValue(20)
    },
    appTitleText: {
        color: "black",
        textAlign: "center",
        fontSize: RFValue(40),
        marginBottom: RFValue(20)
    },
    textinput: {
        width: RFValue(290),
        height: RFValue(50),
       // padding: RFValue(5),
        borderColor: "#",
        borderWidth: RFValue(2),
        borderRadius: RFValue(10),
        fontSize: RFValue(15),
        color: "#FFFFFF",
        backgroundColor: "#800080",
        paddingLeft:60
    },
        textinputo: {
        width: RFValue(290),
        height: RFValue(50),
       // padding: RFValue(5),
        borderColor: "#",
        borderWidth: RFValue(2),
        borderRadius: RFValue(10),
        fontSize: RFValue(15),
        color: "#FFFFFF",
        backgroundColor: "#800080",
        paddingLeft:60
    },
    disabledtextinput: {
        width: RFValue(290),
        height: RFValue(50),
        padding: RFValue(5),
        borderColor: "#",
        borderWidth: RFValue(2),
        borderRadius: RFValue(10),
        fontSize: RFValue(15),
        color: "#FFFFFF",
        backgroundColor: "#800080",
        marginLeft:RFValue(-11),
        paddingLeft:70

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
        alignSelf:'center',
    },
    buttonText: {
        fontSize: RFValue(24),
        color: "#800080"
    },
    buttonTextNewUser: {
        fontSize: RFValue(12),
        color: "#800080",
        alignSelf:'center',
    }
});