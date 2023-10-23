import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class Boy extends Component {
       cart=()=>{
      this.props.navigation.navigate("Cart", {
              book: 'Boy By Roald Dahl'
            })}
    render(){
            return (
      <ScrollView>
            <Text> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Text>
        <Text style={stylus.namastetext}>Boy</Text>
        <Image
          style={{ width: 200, height: 400, alignSelf: 'center' }}
          source={require('../assets/boycover.png')}
        />
            <Text style={stylus.authoro}>By Roald Dahl</Text>
        <Text style={stylus.price}>₹420</Text>
        <Text>
      BOY, Roald Dahl bestselling autobiography, is full of hilarious anecdotes about his childhood and school days, illustrated by Quentin Blake.As a boy, all sorts of unusual things happened to Roald Dahl. There was the time he and four school friends got their revenge on beastly Mrs Prachett in her sweet shop.There are stories of holidays in fishing boats, African adventures and the days of tasting chocolate for Cadburys.{"\n"}You will hear tales of horrible school bullies and the motor-car accident when Roald nose was nearly sliced clean off . . .Roald Dahl vividly shares his memories; some are funny. Some are painful. Some are unpleasant. All are true.
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
