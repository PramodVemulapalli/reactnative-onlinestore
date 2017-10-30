import React, { Component } from 'react';
import { View, Text, Icon } from 'react-native';
import { connect } from 'react-redux';
import {
  RkText
} from 'react-native-ui-kitten';
import {FontAwesome} from './../assets/icons';

class Date_Screen extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: 'Date',
    headerLeft: <RkText rkType='awesome'
                      onPress={ () => { navigation.goBack() }}> {FontAwesome.chevronLeft}  </RkText>,
    tabBarVisible: false,
  });

  render() {
    console.log('Login_Screen:Line 15: Rendering Login_Screen');
      return (
          <View>
            <Text> Hello World {FontAwesome.facebook} </Text>
          </View>
      )
  }
}

export default connect(null,null)(Date_Screen);
