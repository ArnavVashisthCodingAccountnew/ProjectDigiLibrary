import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class Hack extends Component {
  render() {
     function cart(){
      this.props.navigation.navigate("Cart", {
              book: 'Hacking for Kids: An Ethical Approach to Cyber Attacks and Defense by Bryson Payne'
            })
  }
    return (
      <ScrollView>
            <Text> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Text>
        <Text style={stylus.namastetext}>Hacking for Kids: An Ethical Approach to Cyber Attacks and Defense</Text>
        <Image
          style={{ width: 200, height: 400, alignSelf: 'center' }}
          source={require('../assets/hackingcover.png')}
        />
            <Text style={stylus.authoro}>By Bryson Payne</Text>
        <Text style={stylus.price}>₹420</Text>
        <Text>
      Hacking for Kids is a practical, hands-on guide to the art of ethical hacking and cyber defense.As soon as you touch a screen or keyboard, you become a target for cybercrime. This book will explain how these attacks happen, how to protect yourself from them - and how to think like a hacker.           {'\n'} 
          {'\n'} 
          {'\n'} 
By performing common hacks safely in a virtual lab that you will create, and using the tools and techniques attackers use, you will better understand the online threats you need to defend against.Hacking for Kids is a practical, hands-on introduction to every major cyber attack method, from viruses, phishing and mobile hacking, to (web)camfecting, malware and password cracking. 
             {'\n'} 
         {'\n'} 
          {'\n'} 

      Once you know how easy most of these hacks are to execute, you will know exactly how to spot them and stop them. Each chapter walks you through a different type of attack, explains how to simulate it in the lab, and gives you simple but effective tips for strengthening your cyber defenses.
            {'/n'}

      
      You will learn:  


{'\n'}             {'\n'} 
  How to responsibly use attack tools to find security weaknesses before the bad guys do   How to hack into Android phones, Google accounts, IoT devices - even your family car                     {'\n'}           {'\n'} 
          {'\n'} 


{'\n'}  How social-engineering scams (the art of human hacking) work, and self-defense on social media            {'\n'} 
          {'\n'} 
  How criminals gain access to PCs and computer files without a username or password


        {'\n'} {'\n'} {'\n'} 
Hacking for Kids will transform you from a potential cyber-victim into cyber-hero. It will give you the tools and know-how to stay safe online - and keep you a step ahead of cybercriminals.
        </Text>
        <TouchableOpacity>
          <Image
            style={{ width: 220, height: 60, alignSelf: 'center' }}
            source={require('../digilibrary/re.png')}
          />
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
