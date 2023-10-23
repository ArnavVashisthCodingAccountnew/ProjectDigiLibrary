import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class JS extends Component {
  render() {
    return (
      <ScrollView>
            <Text> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Text>
        <Text style={stylus.namastetext}>JavaScript for Kids: A Playful Introduction to Programming</Text>
        <Image
          style={{ width: 200, height: 400, alignSelf: 'center' }}
          source={require('../assets/javascriptcover.png')}
        />
            <Text style={stylus.authoro}>By Nick Morgan</Text>
        <Text style={stylus.price}>₹2,200</Text>
        <Text>
       JavaScript is the programming language of the Internet, the secret sauce that makes the Web awesome, your favorite sites interactive, and online games fun!
{'\n'}{'\n'}{'\n'}

JavaScript for Kids is a lighthearted introduction that teaches programming essentials through patient, step-by-step examples paired with funny illustrations. You’ll begin with the basics, like working with strings, arrays, and loops, and then move on to more advanced topics, like building interactivity with jQuery and drawing graphics with Canvas.
{'\n'}{'\n'}{'\n'}{'\n'}
Along the way, you’ll write games such as Find the Buried Treasure, Hangman, and Snake. You’ll also learn how to:{'/n'}
{'\n'}

–Create functions to organize and reuse your code{'/n'}
{'\n'}

–Write and modify HTML to create dynamic web pages{'/n'}
{'\n'}

–Use the DOM and jQuery to make your web pages react to user input{'\n'}
{'\n'}–Use the Canvas element to draw and animate graphics{'\n'}
{'\n'}

–Program real user-controlled games with collision detection and score keeping{'\n'}
{'\n'}


With visual examples like bouncing balls, animated bees, and racing cars, you can really see what you’re programming. Each chapter builds on the last, and programming challenges at the end of each chapter will stretch your brain and inspire your own amazing programs. Make something cool with JavaScript today!{'\n'}{'\n'}
{'\n'}{'\n'}


Ages 10+ (and their parents!) 
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
