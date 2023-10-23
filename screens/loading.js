import React, { Component } from "react";
import firebase from "firebase";
import { Image,View } from "react-native";

export default class Loading extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        this.props.navigation.navigate("DashboardScreen");

        // ...
      } else {
        this.props.navigation.navigate("On");
        // ...
      }
    });
  }

  render() {
    return (
      <View style={{backgroundColor:"white",alignItems:"center",alignSelf:"center",justifyContent:"center"}}>
        <Image source={require('../assets/animation_27.gif')} style={{height:"90%",width:"90%"}}></Image>
      </View>
    );
  }
}

