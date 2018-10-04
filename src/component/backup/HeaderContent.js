import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// react-native-vector-icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from './IconButton';
import HeaderDate from './HeaderDate';
import DayBefore from '../screen/DayBefore';
import {Navigation} from 'react-native-navigation';
import { goDayBefore } from '../navigation'



const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 70,
    backgroundColor: '#000',
    paddingTop: 20,
  },
  arrow:{
    color: '#fff',
    fontSize: 30,
  },
  arrowOff:{
    color: '#333',
    fontSize: 30,
  },
});


// initial page is 0 for header date
let numberForDayCalc = 0;
let key='';


const _goToDayBefore=()=>{


  goDayBefore();
}

export default class HeaderContet extends React.Component {





  render() {
    return (

      <View style={styles.container}>
        <IconButton
          onPress={this._goToDayBefore}
        >
          <Icon name={"arrow-left-bold"} style={styles.arrow}></Icon>
        </IconButton>

        <HeaderDate></HeaderDate>

        <IconButton>
          <Icon name={"arrow-right-bold"} style={styles.arrowOff}></Icon>
        </IconButton>

      </View>

    );
  }
}