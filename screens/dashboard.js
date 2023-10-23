import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import db from './config'
import firebase from "firebase"
export default class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      quote: '',
      name:'',
      email:firebase.auth().currentUser.email
    };
  }
  componentDidMount() {
    this.fetchQuotes();
    this.getUserDetails27();
 
}
  getUserDetails27 = () => {
    db.collection("users")
      .where("email", "==", this.state.email)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          this.setState({name : doc.data().name})
        })
    });}


  

  fetchQuotes() {
    var category = 'happiness';
    fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
      method: 'GET',
      headers: {
        'X-Api-Key': '+eMhjEwCuniwQ3t6APkwHQ==xgXgfgCU5n0yJDWO',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const { author, quote } = data[0];
          this.setState({ author, quote });
        } else {
          console.error('No quotes found.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  openDrawer1 = () => {
    this.props.navigation.openDrawer();
   };

  render() {
    return (
      <View style={{flex:1,height:screenHeight,width:screenWidth}}>
        <View style={{flexDirection:'row'}}>
         <TouchableOpacity onPress={this.openDrawer1} style={{marginTop:20}}>
         
          <Feather name="menu" size={30} color="black" style={{margin:5}}/>
          </TouchableOpacity>
          <Image style={{ width: 80, height: 80,marginTop:20,alignSelf:'center',marginLeft:screenWidth/3.7}} source={require('../assets/digi.png')}></Image>
          </View>
        <Text style={stylus.namastetext}>Namaste,</Text>
        <Text style={stylus.namastetexto}>{this.state.name}</Text>
        <TouchableOpacity disabled={true} style={{backgroundColor:"purple",margin:15,borderRadius:10}}>
        <Text style={{marginLeft:10, fontSize:15,textAlign:'center',color:"white"}}>{this.state.quote}</Text>
        <Text style={{marginLeft:10,fontSize:17,fontWeight:'bold',textAlign:'center',color:"white"}}>-{this.state.author}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Cat');
          }}>
          <Image
            style={{
              width: 340,
              height: 80,
              marginTop: 30,
              marginBottom: 5,
              marginLeft: 30,
            }}
            source={require('../assets/catologuepng.png')}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          this.props.navigation.navigate('Chat with CEO')
        }}>
          <Image
            style={{
              width: 340,
              height: 80,
              marginTop: 30,
              marginBottom: 30,
              marginLeft: 30,
            }}
            source={require('../assets/supportnow.png')}
          ></Image>
        </TouchableOpacity>
      <Text style={{textAlign:"center",color:"grey",marginBottom:10, marginTop:screenHeight/9}}>Made with 💖 in the heart of Bharat </Text>

      <Text style={{textAlign:"center",color:"grey"}}>Data stored in Mumbai Data center </Text>

      </View>
    );
  }
}

const stylus = StyleSheet.create({
  namastetext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft:7
  },
  namastetexto: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
    marginLeft:7
  },
});
