import React, { Component } from 'react';
import { View, Text, Icon, Platform } from 'react-native';
import { connect } from 'react-redux';
import {
  RkText,
  RkTheme
} from 'react-native-ui-kitten';
import {FontAwesome} from './../assets/icons';

class Date_Screen extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: 'Date',
    headerLeft: <RkText rkType='awesome'
                        style={{
                          fontSize: RkTheme.current.fonts.sizes.h1,
                          alignSelf:'center',
                          marginBottom: Platform.OS === 'ios' ? 0 : 10,
                          marginTop: Platform.OS === 'ios' ? 20: 0,
                          marginLeft: 10
                        }}
                        onPress={ () => { navigation.goBack() }}>
                          {FontAwesome.chevronLeft}
                </RkText>,
    tabBarVisible: false,
  });

  render() {
    console.log('Login_Screen:Line 15: Rendering Login_Screen');
      return (
          <View>
            <Text> Where is poopito </Text>
          </View>
      )
  }
}

export default connect(null,null)(Date_Screen);
