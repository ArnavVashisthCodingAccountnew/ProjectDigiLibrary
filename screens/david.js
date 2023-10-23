import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class David extends Component {

 
  render() {
     function cart(){
      this.props.navigation.navigate("Cart", {
              book: 'The Beast of Buckhingham Palace by David Williams'
            })
  }
  function watch(){
      window.open('https://www.youtube.com/watch?v=dHOVopGHsfo', '_blank')
  }
    return (
      <ScrollView>
            <Text> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Text>
        <Text style={stylus.namastetext}>The Beast of the Buckingham Palace</Text>
        <Image
          style={{ width: 200, height: 400, alignSelf: 'center' }}
          source={require('../assets/beastcover.png')}
        />
            <Text style={stylus.authoro}>By David Williams</Text>
        <Text style={stylus.price}>₹300</Text>
        <Text>
      
Fly into a fiery and fantastical future with No. 1 bestselling author David Walliams, in an epic adventure of myth and legend, good and evil, and one small boy who must save the world. . . Illustrated by the artistic genius Tony Ross! It is 2120 and London is in ruins. The young Prince Alfred has never known a life outside Buckingham Palace - but when strange goings on breach its walls and stalk the corridors in the dead of night, he is thrust into a world of mystery, adventure and monsters. And when his mother, the Queen, is dragged away to the Tower of London, Alfred must screw up his courage and battle to save her, himself. . . and the entire city. In a future of myths and legends, join the bestselling David Walliams and venture forth into his most enthralling tale yet! 
        </Text>
        <TouchableOpacity OnPress={this.cart}>
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
