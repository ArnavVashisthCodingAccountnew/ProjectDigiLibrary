import React, { Component } from 'react';
import { Text, View, StyleSheet ,Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const On = ({navigation}) => {
  return (
  <Onboarding 
    onDone={()=>{
      navigation.navigate("SignUp")
    }
    }
   onSkip={() => {
      navigation.navigate("Login")
    } }

    

    pages={[
      {
                backgroundColor: '#fff',
        image: <Image source={require('../assets/no.1.png')} />,
        title: '#1 Book Library',
        subtitle: 'DigiLibrary is a subscription-based Library option for educational books !',
      },
      {
        backgroundColor: '#fff',
        image: <Image style={{width:400,height:300}} source={require('../assets/1000books.png')} />,
        title: '1,000+ books and toys',
        subtitle: 'Customized for Each Age Group. From Libraries accross Bharat. ',
      },
      {
        backgroundColor: '#fff',
        image: <Image  style = {{height:400, width:400}} source={require('../assets/hamara.png')} />,
        title: 'Hamara Promise',
        subtitle: "Ek Mahina, Ek Kitab, 1 din me aapki doorstep pe. ",
      }
    ]}
  />
);
}

export default On;