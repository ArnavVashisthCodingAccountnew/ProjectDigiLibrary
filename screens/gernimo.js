import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class Ger extends Component {
  render() {
     function cart(){
      this.props.navigation.navigate("Cart", {
              book: 'The Hunt for the Secret Papyrus by Gernimo Stilton'
            })
  }
    return (
      <ScrollView>
            <Text> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Text>
        <Text style={stylus.namastetext}>The Hunt for the Secret Papyrus</Text>
        <Image
          style={{ width: 200, height: 400, alignSelf: 'center' }}
          source={require('../assets/papyrus.png')}
        />
            <Text style={stylus.authoro}>By Gernimo Stilton</Text>
        <Text style={stylus.price}>₹420</Text>
        <Text>
        The micekings are in a panic. The villages best cook is ill, and until she recovers, theres no delicious stew to eat! Geronimo Stiltonord departs immediately in search of a cure for her. But on the way, he ends up snout-to-snout with terrifying dragons! Can he make it back with his fur intact?There was a mystery in New Mouse Citys Egyptian Mouseum! The Black Papyrus, an ancient document that reveals the secret of eternal youth, had disappeared. The mouseums director asked me to help him find it. Yikes -- those Egyptian artifacts freak me out! Luckily, a secret agent came to our aid... but could we trust him? It was up to us to recover the precious scroll!
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
