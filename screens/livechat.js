import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class LiveChat extends Component {
    componentDidMount() {
        // Any additional code you want to execute when the component mounts
        // You can place it here.
      }
  render() {
    return (
      <WebView
        source={{ uri: 'https://arnavvashisthcodingaccountnew.github.io/livechat/livechat.html' }}
        style={{ flex: 1 }}
      />
    );
  }


}

export default LiveChat;
