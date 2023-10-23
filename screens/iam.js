import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class Iam extends Component {
    cart=()=>{
      this.props.navigation.navigate("Cart", {
              book: 'I am Walt Disney by Grace Norwich'
            })
    }
    
  render() {
    
    return (
      <ScrollView>
            <Text> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Text>
        <Text style={stylus.namastetext}>I am Walt Disney</Text>
        <Image
          style={{ width: 200, height: 400, alignSelf: 'center' }}
          source={require('../assets/80cover.png')}
        />
            <Text style={stylus.authoro}>By Grace Norwich</Text>
        <Text style={stylus.price}>₹180</Text>
        <Text>
     I am the creator of Mickey mouse. I am Walt Disney. As a child, I had a wild imagination and a great curiosity. As I grew up, I used those qualities to become a Cartoonist. Eventually, I turned these drawings into films and began My own animation business. One of My characters, Mickey mouse, became so popular that movie theatres sold out and I won an Academy Award. After pursuing a career as a film producer, director, screenwriter, voice actor, entrepreneur and entertainer, I added developer to my resume when I created Disneyland amusement Park. 
     
     {'/n'}
     I became tremendously successful and beloved by children of all ages because of My belief that even the impossible is possible. I am Walt Disney. To this day, Walt Disneys characters remain some of the most recognizable images in the world. With books, TV shows, films and amusement parks devoted to his creations, the Walt Disney name lives on. Learn all about this remarkable mans fascinating life in Scholastics biography series, I am.
        </Text>
        <TouchableOpacity>
          <Image
            style={{ width: 220, height: 60, alignSelf: 'center' }}
            source={require('../digilibrary/re.png')}
          />
        </TouchableOpacity>
               
      </ScrollView>
    );
  }
}


const stylus = StyleSheet.create({
  namastetext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
  namastetexto: {
    fontWeight: 'bold',
    fontsize: 50,
    color: 'blue',
  },
    authoro: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 27,
  },
  price: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 29,
  },
});
