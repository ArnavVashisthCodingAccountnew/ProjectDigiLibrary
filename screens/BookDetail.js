import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity ,Dimensions,ScrollView} from 'react-native';
import firebase from 'firebase';
import db from './config';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const BookDetail = ({ route,navigation }) => {
    const [minDate, setMinDate] = useState('');
    useEffect(() => {
        var d = new Date();
      
        setMinDate(d.toDateString())
    }, []);
  const { book } = route.params;
  const addToCart=async()=> {
        await db.collection("cart").add({
           bookName:book.title,
           email:firebase.auth().currentUser.email,
           dateoforder:minDate,
           price:book.price,
        });
        alert('Added to cart');
     
    
};

  return (
    <ScrollView style={styles.container}>
   
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>

        <TouchableOpacity   onPress={()=>{
        navigation.navigate("Cat")
      }} style={{margin:20}}><FontAwesomeIcon
        icon={faArrowLeftLong}
        size={RFValue(26)}
    
  
      /></TouchableOpacity >
      
      <TouchableOpacity  onPress={()=>{
        navigation.navigate("Cart")
      }}>
         <Image style={{ width: 40, height: 40,margin:20,}} source={require('../assets/cart.png')}></Image></TouchableOpacity>
        </View>
         
      <Image source={{ uri: book.imageUri }} style={styles.image} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}> by {book.author}</Text>
      <Text style={styles.review}>{book.review}</Text>
      <Text style={styles.price}>Price-{book.price}</Text>
      <Text style={styles.description}>{book.description}</Text>
      <TouchableOpacity onPress={addToCart}>
          <Image
            style={{ width: 220, height: 60, alignSelf: 'center' }}
            source={require('../assets/re.png')}
          />
        </TouchableOpacity>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'periwinkle'
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 5,
    alignSelf:'center',
    margin:10,
    borderRadius:60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
   
    alignSelf:'center',
  },
  author: {
    fontSize: 18,
    alignSelf:'center',
    fontWeight:'bold',
    color:'royalblue'
  },
  review: {
    fontSize: 16,
    alignSelf:'center'
  },
  price: {
    fontSize: 18,
    alignSelf:'center',
    color:'orange',
    fontWeight:'bold'
  },
  description:{
    fontSize: 13,
    alignSelf:'center',
    margin:10,
  }
});

export default BookDetail;
