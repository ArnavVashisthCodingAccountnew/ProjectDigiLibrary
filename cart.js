import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Cart extends Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'purple', fontSize: 60, fontWeight: 'bold' }}>
            Cart
          </Text>
        </View>
        <View>
            <Text>{this.props.route.params.bookname}</Text>
            
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    height: 100,
    width: 100,
  },
});
