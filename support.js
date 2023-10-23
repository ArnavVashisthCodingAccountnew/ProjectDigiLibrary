import React, { Component } from 'react';
import { Text, View, StyleSheet,WebView } from 'react-native';

export default class Buy extends Component {
  render() {
    return (
      <View>
<WebView
        source={{
          uri: 'https://help.arnav.software',
        }}
        style={{marginTop: 20}}
      />      </View>
    );
  }
}
