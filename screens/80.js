import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class Eighty extends Component {
      cart=()=>{
      this.props.navigation.navigate("Cart", {
              book: 'Around The World in 80 Days by Jules Verne'
            })
    }
  render() {
    return (
      <ScrollView>
            <Text> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Text>
        <Text style={stylus.namastetext}>Around The World in 80 Days</Text>
        <Image
          style={{ width: 200, height: 400, alignSelf: 'center' }}
          source={require('../assets/80cover.png')}
        />
            <Text style={stylus.authoro}>By Jules Verne</Text>
        <Text style={stylus.price}>₹240</Text>
        <Text>
      A fastidious Englishman, Phileas Fogg, puts his life?s savings at stake, claiming he can travel around the world in just eighty days. Thus begins his fantastic journey, full of excitement and a great deal of risk. Phileas Fogg and his servant, Passe-partout visit many foreign lands, exotic and beautiful. Amidst all the excitement is a case of mistaken identity, which has a Scotland Yard detective hot at their heels! Will Phileas Fogg lose the bet? Will he be put behind bars for robbing a Bank? Read on to find out.
        </Text>
        <TouchableOpacity>
          {/* <Image
            style={{ width: 220, height: 60, alignSelf: 'center' }}
            source={require('../digilibrary/re.png')}
          /> */}
        </TouchableOpacity>
                <TouchableOpacity>
          <Image
            style={{ width: 240, height: 60, alignSelf: 'center' }}
            source={require('../assets/80cover.png')}
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
