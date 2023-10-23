

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import firebase from 'firebase';
import db from '../screens/config'
import * as ImagePicker from 'expo-image-picker';
const CustomDrawer = props => {
  const [name,setName]=useState('');
  const email=firebase.auth().currentUser.email;
  const[image,setImage]=useState('https://github.com/ArnavVashisthCodingAccountnew/HACKED/blob/main/user.png?raw=true');

    useEffect(() => {
    getUserDetails();
    fetchImage();
 
  }, []);

  const getUserDetails = () => {
    db.collection("users")
      .where("email", "==", email)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
         setName(doc.data().name)
         console.log("Name-",doc.data().name)
        })
    });}
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    console.log('Result', result.assets[0].uri);


    if (!result.cancelled) {
      setImage(result.assets[0].uri );
      uploadImage(result.assets[0].uri);
    }
  };


  const uploadImage = async (imageUri) => {
    try {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function () {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', imageUri, true);
        xhr.send(null);
      });


      await firebase
        .storage()
        .ref()
        .child('usersP/' + firebase.auth().currentUser.email)
        .put(blob);


      fetchImage();
    } catch (error) {
      console.log(error);
    }
  };


  const fetchImage = async () => {
    try {
      const url = await firebase
        .storage()
        .ref()
        .child('usersP/' + firebase.auth().currentUser.email)
        .getDownloadURL();
       setImage( url) ;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#5e17eb'}}>
       
       <TouchableOpacity onPress={pickImage} style={{ alignItems: 'center' }}>
          <Image
          source={{ uri: image }}
          style={{ width:150, height:150, alignSelf:'center', borderRadius:100, borderWidth:2,borderColor:'white'}}/>
        </TouchableOpacity>
        <Text
            style={{
              color: '#fff',
              fontSize: 20,
             marginLeft:20,
              marginBottom: 5,
              fontWeight:'bold'
            }}>
      {name}
          </Text>
        <Text
            style={{
              color: '#fff',
              fontSize: 16,
             marginLeft:20,
              marginBottom: 5,
            }}>
      {email}
          </Text>  

       
     
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />  

        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
   <Text>Version 1.2 BETA⚡</Text>
     
      </View>
    </View>
  );
};








export default CustomDrawer;

