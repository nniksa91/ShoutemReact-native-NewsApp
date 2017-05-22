import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import {StackNavigator} from 'react-navigation';

export default class Splash extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const {navigate} = 'this.props.navigation';
    return (
      <View style={styles.container}>
        <Image style={styles.imglogo} source={{
          uri: 'https://www.marketingbank.jp/product/common/upload/img/logo_TCD0000065.png'
        }}/>
        <Text style={styles.welcome}>
          News
        </Text>
        <View style={styles.button}>
          <Button onPress={() => navigate('News')} title="News"/>
        </View>
      </View>
    );
  }
}

class News extends React.Component {
  static navigationOptions = {
    title: 'News'
  };
  render() {
    return (
      <View>
        <Text>News test
        </Text>
      </View>
    );
  }
}

const NewsApp = StackNavigator({
  Home: {
    screen: Splash
  },
  News: {
    screen: News
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9A825'
  },
  welcome: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
    color: '#12aae1'
  },
  imglogo: {
    height: 75,
    width: 250

  },
  button: {
    marginTop: 25,
    width: 150

  }

});
