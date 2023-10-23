import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class Kalam extends Component {
  render() {
     function cart(){
      this.props.navigation.navigate("Cart", {
              book: 'The Wings of Fire by Dr. APJ Abdul Kalam'
            })
  }
    return (
      
      <ScrollView>
            <Text> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Text>
        <Text style={stylus.namastetext}>Wings of Fire: An Autobiography</Text>
        <Image
          style={{ width: 200, height: 400, alignSelf: 'center' }}
          source={require('../assets/kalamcover.png')}
        />
            <Text style={stylus.authoro}>By Dr APJ Abdul Kalam</Text>
        <Text style={stylus.price}>₹420</Text>
        <Text>
     Every common man who by his sheer grit and hard work achieves success should share his story with the rest for they may find inspiration and strength to go on, in his story. The 'Wings of Fire' is one such autobiography by visionary scientist Dr. APJ Abdul Kalam, who from very humble beginnings rose to be the President of India. The book is full of insights, personal moments and life experiences of Dr. Kalam. It gives us an understanding on his journey of success. Dr. Kalam by narrating his life journey evokes the reader to identify with one’s inner fire and potential, for he was of the firm belief that each one of us was born with the strength and potential to make a tangible change in the world. 
       {'\n'} 

     How he inspired himself to achieve dreams and how he went about accomplishing so much is what the book captures nicely. The book recollects many anecdotes and stories from childhood, his time at school and college. The time spent at the Langley Research Center, NASA and Wallops Flight Facility gets a lot of attention.
     
    {'\n'} 
      Personal tragedies have not been left out. The time when he lost his father and how he felt when conferred with many awards like the Padma Bhushan have been written in much detail. The second half of the book deals with Dr Kalam, the scientist who made a significant contribution in developing the countries guided missile program, a pioneering effort for the security of the nation. Its not with reason that he was nicknamed as the Missile Man of India. The book also contains 24 photographs at various stages of his life. 
      {'\n'} {'\n'} 

      Authored by Dr APJ Abdul Kalam and Mr. Arun Tiwari, the 180 page book The Wings of Fire
      was first published in the year 2000. Mr Tiwari is a well-known missile scientist who has worked with Dr. Kalam. Having become a bestseller, the book has even been translated into thirteen languages, which includes Chinese and French. 
      
           {'/n'}

      About the Author :- Dr APJ Abdul Kalam from 2002 to 2007 served as the 11th President of India. Greatly admired all over India, he was a scientist by profession, who played a leading role in developing the countrys missile program. From humble roots in Rameswaram, Tamil Nadu, Dr Kalam in an inspirational autobiography The Wings of Fire traces the rise and the mark he made in life. Mr. Arun Tiwari, a scientist, was a colleague of Dr Kalam.
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
