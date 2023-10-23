import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class Roald extends Component {
  render() {
 function cart(){
      this.props.navigation.navigate("Cart", {
              book: 'Charlie and The Great Glass Elevator by Roald Dahl'
            })
  }
    return (
      <ScrollView>
            <Text> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Text>
        <Text style={stylus.namastetext}>Charlie and The Great Glass Elevator</Text>
        <Image
          style={{ width: 200, height: 400, alignSelf: 'center' }}
          source={require('../assets/dahlcover.png')}
        />
            <Text style={stylus.authoro}>By Roald Dahl</Text>
        <Text style={stylus.price}>₹300</Text>
        <Text>
     Inside the Great Glass Elevator, Willy Wonka, Charlie Bucket and his family are cruising a thousand feet above the chocolate factory.They can see the whole world below them, but they are not alone. The American Space Hotel has just launched. Lurking inside are the Vernicious Knids - the most brutal, vindictive murderous beasts in the universe.So grab your gizzard! Hold your hats! Only Charlie and Willy Wonka can stop the Knids from destroying everything!
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
