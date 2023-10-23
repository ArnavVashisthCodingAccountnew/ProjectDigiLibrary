import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
export default class Rick extends Component {
  cart = () => {
      this.props.navigation.navigate('C', {
              bookname: '[The Trials of Apollo] The Hidden Oracle by Rick Riordan'
            });
  };

  render() {
    return (
      <ScrollView>
        <Text>
          {' '}
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </Text>
        <Text style={stylus.namastetext}>The Hidden Oracle</Text>
        <Image
          style={{ width: 200, height: 400, alignSelf: 'center' }}
          source={require('../assets/apollo.png')}
        />
        <Text style={stylus.authoro}>By Rick Riordan</Text>
        <Text style={stylus.price}>₹420</Text>
        <Text>
          How do you punish an immortal? By making him human. After angering his
          father Zeus, the god Apollo is cast down from Olympus. Weak and
          disoriented, he lands in New York City as a regular teenage boy. Now,
          without his godly powers, the four-thousand-year-old deity must learn
          to survive in the modern world until he can somehow find a way to
          regain Zeus’s favor. But Apollo has many enemies—gods, monsters, and
          mortals who would love to see the former Olympian permanently
          destroyed. Apollo needs help, and he can think of only one place to go
          . . . an enclave of modern demigods known as Camp Half-Blood
        </Text>
        <TouchableOpacity onPress={this.cart}>
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
