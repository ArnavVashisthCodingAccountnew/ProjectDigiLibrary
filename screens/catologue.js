// import * as React from 'react';
// import {
//   Image,
//   FlatList,
//   Dimensions,
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// const screenHeight = Dimensions.get('window').height;
// const screenWidth = Dimensions.get('window').width;

// export default class Cho1 extends React.Component {
//   render(){
    
//   return (
//     <ScrollView>
//       <Text style={Stylus.libo}>Library</Text>
//       <Text style={Stylus.book}>Non-fiction</Text>
//       <ScrollView horizontal={true}>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('Quant')
//         }} >
//           <Image
//             style={{ width: 102, height: 150,margin:10 }}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/quantaum.png' }}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('Sapiens')
//         }}>
//           <Image
//             style={{ width: 102, height: 150,margin:10 }}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/sapiens.png' }}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('US')
//         }}>
//           <Image
//             style={{ width: 102, height: 150,margin:10 }}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/us.png' }}
//           />
//         </TouchableOpacity>
//       </ScrollView>
//       <Text style={Stylus.book}>Fiction</Text>
//       <ScrollView horizontal={true}>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('Rick')
//         }}>
//           <Image
//             style={{ width: 102, height: 140,margin:10 }}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/rick.png' }}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('Gernimo')
//         }}>
//           <Image
//             style={{ width: 102, height: 140 ,margin:10}}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/gernimo.png' }}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('David')
//         }}>
//           <Image
//             style={{ width: 102, height: 140,margin:10 }}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/david.png' }}
//           />
//         </TouchableOpacity>
//       </ScrollView>
//       <ScrollView horizontal={true}>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('80')
//         }}>
//           <Image
//             style={{ width: 102, height: 140 ,margin:10}}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/80datw.png' }}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('Dahl')
//         }}>
//           <Image
//             style={{ width: 102, height: 140 ,margin:10}}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/roaldh.png' }}
//           />
//         </TouchableOpacity>
//       </ScrollView>
//       <Text style={Stylus.book}>Biography</Text>
//       <ScrollView horizontal={true}>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('Walt')
//         }}>
//           <Image
//             style={{ width: 102, height: 140 ,margin:10}}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/iam.png' }}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('Kalam')
//         }}>
//           <Image
//             style={{ width: 102, height: 140,margin:10 }}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/drkalam.png' }}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('Boy')
//         }}>
//           <Image
//             style={{ width: 102, height: 140 ,margin:10}}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/boy.png' }}
//           />
//         </TouchableOpacity>
//       </ScrollView>
//       <Text style={Stylus.book}>Coding</Text>
//       <ScrollView horizontal={true}>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('JS')
//         }}>
//           <Image
//             style={{ width: 102, height: 140,margin:10 }}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/js.png' }}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('Hack')
//         }}>
//           <Image
//             style={{ width: 102, height: 140,margin:10 }}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/hack.png' }}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>{
//           this.props.navigation.navigate('Linus')
//         }}>
//           <Image
//             style={{ width: 102, height: 140,margin:10 }}
//             source={{ uri: 'https://mrbeastcompany.github.io/d2/linux.png' }}
//           />
//         </TouchableOpacity>
//       </ScrollView>
      
//     </ScrollView>
//   );
//   }
// }

// const Stylus = StyleSheet.create({
//   libo: {
//     color: 'purple',
//     fontWeight: 'bold',
//     fontSize: 35,
//     marginTop:10
//   },
//   book: {
//     color: 'purple',
//     fontWeight: 'bold',
//     fontSize: 30,
//     marginTop:15,
//   },
// });

import * as React from 'react';
import {
  Image,
  Dimensions,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { RFValue } from 'react-native-responsive-fontsize';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class Cho1 extends React.Component {

  openDrawer1 = () => {
    this.props.navigation.openDrawer();
   };
  render() {
    
    const booksNonFiction = [
      {
        title: 'Quantaum Computing',
        author: 'Brian Clegg',
        review: '4.5 stars',
        imageUri: 'https://m.media-amazon.com/images/I/81U9Hz7J7wL._AC_UF1000,1000_QL80_.jpg',
        price:'600/-',
        description:'The ultimate non-technical guide to the fast-developing world of quantum computing.Computer technology has improved exponentially over the last 50 years. But the headroom for bigger and better electronic solutions is running out. Our best hope is to engage the power of quantum physics. Quantum algorithms had already been written long before hardware was built. These would enable, for example, a quantum computer to exponentially speed up an information search, or to crack the mathematical trick behind internet security. However, making a quantum computer is incredibly difficult.'
      },
      {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        review: '4.3 stars',
        imageUri: 'https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF894,1000_QL80_.jpg',
        price:'610/-',
        description:'In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, palaeontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?'
      },
      {
        title: 'Unstoppable Us',
        author: 'Yuval Noah Harari',
        review: '4.3 stars',
        imageUri: 'https://m.media-amazon.com/images/I/91U9tVzQfbL._AC_UF894,1000_QL80_.jpg',
        price:'360/-',
        description:'Get ready for the most amazing story there ever was - the incredible true tale of the Unstoppables. Find out how fire shrank our stomachs, how our ancestors spoke to animals, what football can tell us about being human, how we used our superpower for good and bad . . . and how YOU have the superpower to change the world.'
      },

    ];

    const booksFiction = [
      {
        title: 'Code Name Bananas',
        author: 'David Williams',
        review: '4.3 stars',
        imageUri: 'https://m.media-amazon.com/images/I/51ZfEEY24NL._SY445_SX342_.jpg',
        price:'250/-',
        description:'Go back in time with No. 1 bestselling author David Walliams for a whizz-bang epic adventure of action, laughter and secret plots – and the extraordinary friendship between a little boy and a huge gorilla that just might save the day…   1940. Britain is at war with Nazi Germany.Eleven-year-old Eric spends his days at the place that makes him most happy: London Zoo. And there is one animal in particular he loves: Gertrude the gorilla. With bombs falling all over London, Eric must rescue Gertrude.Together with his Uncle Sid, a keeper at the zoo, the three go on the run. But while hiding out at the seaside they uncover a top-secret Nazi plot…Join David Walliams on this action-packed, laugh-out-loud adventure for all the family! David Walliams book The Worlds Worst Monsters was a Sunday Times bestseller w/c 18-09-2023.'
      },
      {
        title: 'Fantastic Mr.Fox',
        author: 'Ronald Dahl',
        review: '4.2 stars',
        imageUri: 'https://m.media-amazon.com/images/I/51rkuKiYpvL._SY445_SX342_.jpg',
        price:'199/-',
        description:'Mr Fox is a very clever fox - every evening he creeps down into the valley and helps himself to food from the nearby farms.Chickens from Farmer Boggis, ducks and geese from Farmer Bunce, and turkeys from Farmer Bean.But now the farmers have had enough, and together they hatch a plan to get rid of Mr Fox for good! But what they dont know is Mr Fox has some help, and a fantastic escape plan of his own'
      },
      {
        title: 'THE Kingdom of fantasy',
        author: 'Gerinimo Stilton',
        review: '4.3 stars',
        imageUri: 'https://m.media-amazon.com/images/I/51uIL7ehDZL._SY445_SX342_.jpg',
        price:'300/-',
        description:'Geronimo Stilton arrives at work one fine morning to find the office in a complete uproar. The minute Geronimo sets his paw in the office, he realises this is not going to be a good day. His staff is complaining about things and everything is in disorder. Worst of all, he has a pimple on his snout. When he heads home after work, he is struck by a lightening and the electricity goes off. He has to find his way to his attic in pitch dark. After several mishaps like stepping on a roller skate and stepping onto a rake, he discovers a magical golden staircase there. He steps into the Kingdom of Fantasy. He is helped by Scribblehopper, a frog, who acts as his guide. His mission is to save the Queen of Fairies. He has to face many dangerous creatures like scorpions, sea serpents, pixies and creatures he did not know existed. He finds he has to save his own tail in addition to the Queen. Will Geronimo complete his adventure successfully or perish in the attempt?'

      },

    ];

    const booksCoding = [
      {
        title: 'Get Coding',
        author: 'Young Rewired State',
        review: '4.3 stars',
        imageUri: 'https://m.media-amazon.com/images/I/81-CXNSU+yL._SY385_.jpg',
        price:'450/-',
        description:'Learn how to write code and then build your own website, app and game using HTML, CSS and JavaScript in this essential coding guide for kids from expert organization Young Rewired State.'
      },
      {
        title: 'Computer Coding with Scratch 3.0',
        author: 'Carol Vorderman',
        review: '4.2 stars',
        imageUri: 'https://m.media-amazon.com/images/I/51kRdGRxHeL._SY445_SX342_.jpg',
        price:'150/-',
        description:'Get ready to learn a whole new language: computer coding! Perfect for coders already familiar with Scratch, with easy-to-understand instructions and no complicated jargon. Get ready, get set, get coding!'
      },
      {
        title: 'The Python Champions of Coding',
        author: ' Paarth Arya',
        review: '4.3 stars',
        imageUri: 'https://m.media-amazon.com/images/I/81HdtF0v54L._SY385_.jpg',
        price:'290/-',
        description:'YOUR FIRST COMPREHENSIVE BOOK FOR CODING WITH PYTHON—EASY, BREEZY, AND INTERACTIVE This is a book for beginners like it ought to be—it cuts through the clutter to focus on all the key points and fundamentals holistically. From theoretical concepts like variables and operators to practical knowledge about if statements and loops, as also core data structures like lists, tuples, and dictionaries, this is a great resource for schools as well as individuals. It talks to you like a friend holding your hand on a journey to learn and explore, and in the process, makes you self-sufficient to gain further expertise and knowhow by providing practical tips and links.'
      },

    ];

  
    

    return (
      <ScrollView>
         <View style={{flexDirection:'row'}}>

<TouchableOpacity   onPress={()=>{
this.props.navigation.navigate("Dash")
}} style={{margin:20}}><FontAwesomeIcon
icon={faArrowLeftLong}
size={RFValue(26)}


/></TouchableOpacity>

 <Image style={{ width: 80, height: 80,marginTop:20,alignSelf:'center',marginLeft:screenWidth/5}} source={require('../assets/digi.png')}></Image>
</View>
        {/* <TouchableOpacity style={{ backgroundColor: '#5e17eb' }}>
          <Text style={{ color: 'white', fontSize: 19, marginTop: 20, marginBottom: 10, fontWeight: 'bold' }}>
            Find the books you want.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F6F6F6',
              padding: 10,
              borderRadius: 14,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 30, // Apply border-radius to the entire search bar
            }}>
            <FontAwesome name="search" size={20} color="gray" style={{ marginLeft: 10, marginRight: 10 }} />

            <TextInput
              style={{
                flex: 1,
                height: 35,
                backgroundColor: '#F6F6F6', // Set input background to transparent
                marginRight: 20,
              }}
              placeholder="Search"
            />
          </View>
        </TouchableOpacity> */}

        <Text style={Stylus.book}>Top Authors</Text>
        <ScrollView horizontal={true}>
          <TouchableOpacity>
            <View style={Stylus.authorCardContainer}>
              <Image
                style={Stylus.authorImage}
                source={{ uri: 'https://cdn.britannica.com/91/133791-050-0BA517B1/Roald-Dahl-photograph-Carl-Van-Vechten-1954.jpg?w=400&h=300&c=crop' }}
              />
              <Text style={Stylus.authorName}>Roald</Text>
              <Text style={Stylus.authorName}>Dahl</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={Stylus.authorCardContainer}>
              <Image
                style={Stylus.authorImage}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Elisabettadami-2019.jpg/330px-Elisabettadami-2019.jpg' }}
              />
              <Text style={Stylus.authorName}>Elisabetta</Text>
              <Text style={Stylus.authorName}>Dami</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={Stylus.authorCardContainer}>
              <Image
                style={Stylus.authorImage}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ashleigh_and_David_Walliams_%28the_voice_of_Pudsey_in_the_movie%29_%28cropped%29.JPG/330px-Ashleigh_and_David_Walliams_%28the_voice_of_Pudsey_in_the_movie%29_%28cropped%29.JPG' }}
              />
              <Text style={Stylus.authorName}>David</Text>
              <Text style={Stylus.authorName}>Williams</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={Stylus.authorCardContainer}>
              <Image
                style={Stylus.authorImage}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Jules_Verne_by_%C3%89tienne_Carjat.jpg/330px-Jules_Verne_by_%C3%89tienne_Carjat.jpg' }}
              />
              <Text style={Stylus.authorName}>Jules</Text>
              <Text style={Stylus.authorName}>Verne</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <Text style={Stylus.book}>Non Fiction</Text>
        <ScrollView horizontal={true}>
          {booksNonFiction.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              review={book.review}
              imageUri={book.imageUri}
              price={book.price}
              description={book.description}
              navigate={() => this.props.navigation.navigate('BookDetail', { book })}
            />
          ))}
        </ScrollView>

        <Text style={Stylus.book}>Fiction</Text>
        <ScrollView horizontal={true}>
          {booksFiction.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              review={book.review}
              imageUri={book.imageUri}
              navigate={() => this.props.navigation.navigate('BookDetail', { book })}
            />
          ))}
        </ScrollView>

        <Text style={Stylus.book}>Coding</Text>
        <ScrollView horizontal={true}>
          {booksCoding.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              review={book.review}
              imageUri={book.imageUri}
              navigate={() => this.props.navigation.navigate('BookDetail', { book })}
            />
          ))}
        </ScrollView>
      </ScrollView>
    );
  }
}

const BookCard = ({ title, author, review, imageUri, navigate }) => {
  return (
    <TouchableOpacity onPress={navigate}>
      <View style={Stylus.cardContainer}>
        <Image style={Stylus.cardImage} source={{ uri: imageUri }} />
        <Text style={Stylus.cardTitle}>{title}</Text>
        <Text style={Stylus.cardAuthor}>{author}</Text>
        <Text style={Stylus.cardReview}>{review}</Text>
      </View>
    </TouchableOpacity>
  )};
    const Stylus = StyleSheet.create({
      libo: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 25,
      },
      book: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 20,
        marginTop:5,
      },
      cardContainer: {
        margin: 10,
        width: 150,
      },
      cardImage: {
        width: 130,
        height: 200,
        borderRadius: 30,
      },
      cardTitle: {
        fontWeight: 'bold',
        fontSize: 14,
      },
      cardAuthor: {
        color: 'grey',
        fontSize: 12,
      },
      cardReview: {
        color: 'grey',
        fontSize: 12,
      },
      authorCardContainer: {
        marginLeft: 10,
        width: 100,
      },
      authorImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
      },
      authorName: {
        color: 'grey',
        textAlign: 'center',
        fontSize: 13,
      },
    });
    
