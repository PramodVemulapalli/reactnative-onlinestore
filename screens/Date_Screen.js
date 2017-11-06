import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Icon, Platform, ListView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
  RkText,
  RkTheme
} from 'react-native-ui-kitten';
import {FontAwesome} from './../assets/icons';

import CalendarStrip from 'react-native-calendar-strip';
import Moment from 'moment';


// import CalendarStrip from 'react-native-calendar-strip';
// import CalendarStrip from 'react-native-calendar-strip';

const shows_first = [
  {
    key: 1,
    name: 'Wed',
  },
  {
    key: 2,
    name: 'Thr',
  },
  {
    key: 3,
    name: 'fri',
  },
  {
    key: 4,
    name: 'sat',
  },
  {
    key: 5,
    name: 'sun',
  },
  {
    key: 6,
    name: 'Wed',
  },
  {
    key: 7,
    name: 'Thr',
  },
  {
    key: 8,
    name: 'fri',
  },
  {
    key: 9,
    name: 'sat',
  },
  {
    key: 10,
    name: 'sun',
  }
]

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

  _renderItem(item){
    return(
      <View style={{margin: 25}}>
      <Text>{item.name}</Text>
      </View>
    )
  }

  render() {
    console.log('Login_Screen:Line 15: Rendering Login_Screen');
    let startDate = Moment();
    console.log(startDate);
    let datesWhitelist = [{
      start: Moment(),
      end: Moment().add(10, 'days')  // total 4 days enabled
    }];
    let datesBlacklist = [ Moment().startOf('week').add(6, 'days'), Moment().startOf('week').add(7, 'days'), Moment().startOf('week').add(13, 'days'), Moment().startOf('week').add(14, 'days') ]; // 1 day disabled
    //calendarAnimation={{type: 'sequence', duration: 30}}
    //daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#9265DC'}}
    /*
    <CalendarStrip
      startingDate={startDate.clone().add(1, 'days')}
      calendarAnimation={{type: 'sequence', duration: 30}}
      daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#9265DC'}}
      style={{height:120, paddingTop: 20, paddingBottom: 10}}
      calendarHeaderStyle={{color: 'black', paddingBottom: 20}}
      daySelectionAnimation={{ highlightColor: '#9265DC' }}
      calendarColor={'white'}
      dateNumberStyle={{color: 'black'}}
      dateNameStyle={{color: 'black'}}
      iconLeft={require('./../assets/icons/left-arrow.png')}
      iconRight={require('./../assets/icons/right-arrow.png')}
      iconContainer={{flex: 0.1}}
      datesWhitelist={datesWhitelist}
      datesBlacklist={datesBlacklist}
    />
    */


    return (
        <View>
          <CalendarStrip
              startingDate={startDate.clone().add(1, 'days')}
              calendarAnimation={{type: 'sequence', duration: 30}}
              daySelectionAnimation={{type: 'background', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
              style={{height: 120, paddingTop: 20, paddingBottom: 10}}
              calendarHeaderStyle={{color: 'black'}}
              calendarColor={'white'}
              dateNumberStyle={{color: 'black'}}
              dateNameStyle={{color: 'black'}}
              highlightDateNumberStyle={{color: 'red'}}
              highlightDateNameStyle={{color: 'red'}}
              disabledDateNameStyle={{color: 'grey'}}
              disabledDateNumberStyle={{color: 'grey'}}
              datesWhitelist={datesWhitelist}
              datesBlacklist={datesBlacklist}
              iconLeft={require('./../assets/icons/left-arrow.png')}
              iconRight={require('./../assets/icons/right-arrow.png')}
              iconContainer={{flex: 0.1}}
          />
          <Text>{'hello'}</Text>
          <FlatList
            horizontal
            SeparatorComponent={() => <View style={{width: 30}} />}
            renderItem={({item}) => this._renderItem(item)}
            data={shows_first}
          />
        </View>
    );
  }
}

export default connect(null,null)(Date_Screen);
