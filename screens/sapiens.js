import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default class Sapiens extends Component {
  render() {
     function cart(){
      this.props.navigation.navigate("Cart", {
              book: 'Sapiens: A Graphic Edition Vol. 2 By Youval Noah Harrari'
            })
  }
    return (
      <ScrollView>
      <Text> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Text>
        <Text style={stylus.namastetext}>Sapiens: A Graphical Edition Vol. 1</Text>
        <Image
          style={{ width: 300, height: 500, alignSelf: 'center' }}
          source={require('../assets/sapienscover.png')}
        />   
        <Image
          style={{ width: 300, height: 500, alignSelf: 'center' }}
          source={require('../assets/sapienscovervol2.png')}
        />
        <Text style={stylus.authoro}>By Youval Noah Harrari</Text>
        <Text style={stylus.price}>₹699/per book</Text>
        <Text>
        Volume 2:{'\n'} {'\n'} 
       Discover the second volume of an epic, beautifully illustrated graphic history of humankind, based on Yuval Noah Harari  multi-million copy bestselling phenomenon. {'\n'} {'\n'}  When nomadic Homo sapiens settled to live in one place, they started working harder and harder. But why didnt they get a better life in return?In The Pillars of Civilization, Yuval Noah Harari and his companions including Prof. Saraswati and Dr. Fiction travel the length and breadth of human history to investigate how the Agricultural Revolution changed society forever. {'\n'} {'\n'} Discover how wheat took over the world, how war, famine, disease and inequality became a part of the human condition, and why we might only have ourselves to blame.The origins of modern farming are told through Elizabethan tragedy, the changing fortunes of domesticated plants and animals are tracked in the columns of the Daily Business News, and the history of inequality is revealed in a superhero detective story.
        </Text>
       
                <TouchableOpacity>
          <Image
            style={{ width: 360, height: 60, alignSelf: 'center' }}
            source={require('../assets/sapiensvol22.png')}
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
