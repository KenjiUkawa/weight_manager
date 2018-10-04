import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import NumberInput from '../component/NumberInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from '../component/IconButton';
import HeaderDate from '../component/HeaderDate';
import {Navigation} from 'react-native-navigation';




export default class Home extends React.Component {

  render() {




    // to get current date and primaryID
    let pageIndex ={},
        primaryId ={},
        weigth={},
        innerFat={};

    // get date as for primary key
    constructor(props) {
      super(props);

      this.state = {
        today: new Date().getFullYear()+''+(new Date().getMonth()+1)+''+new Date().getDate(),
        year: new Date().getFullYear(),
        monthDay: (new Date().getMonth()+1)+'.'+new Date().getDate(),
        dayOfWeek: ["SUN","MON","TUE","WED","THU","FRI","SAT"][new Date().getDay()],
      };
    }


    // primaryId = this.state.today;
    console.log(this,state,today+', '+this.state.year+', '+this.state.monthDay+', '+this.state.dayOfWeek);

    // confirm if values exist
    // AsyncStorage.getItem('primaryId', (error,keys) => {
    //   if (!error) { //If there are no errors
    //     //handle result
    //     if (result !== null) this.setState({primaryId:keys});
    //   }
    //   console.log(keys);
    // });






    return (


      <View style={styles.container}>
        <View style={styles.main}>

          <StatusBar barStyle="light-content" hidden={false}/>

          {/*-------- Header --------
          <View style={styles.headerContainer}>

            <IconButton>
              <Icon name={"arrow-left-bold"} style={styles.arrow}></Icon>
            </IconButton>

            <HeaderDate
              year={this.state.year}
              monthDay={this.state.mounthDy}
              dayOfWeek={this.state.dayOfWeek}
            />

            <IconButton>
              <Icon name={"arrow-right-bold"} style={styles.arrowOff}></Icon>
            </IconButton>
          </View>{/* Header

        </View>*/}

        {/*-------- Number input section 
        <View style={styles.main}>
          <NumberInput text={'体重'} today={this.state.today} primaryId={this.state.primaryId}></NumberInput>

          <NumberInput text={'体脂肪'}></NumberInput>

        </View>--------

        <View style={styles.footer}>

          <IconButton>
          <Icon name={'finance'} style={styles.buttonIcon}></Icon>
          </IconButton>

          <IconButton>
          <Icon name={'tune'} style={styles.buttonIcon}></Icon>
          </IconButton>


        </View>*/}

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor: '#3E3A39',
  },
  main: {
    alignItems: 'center',
    alignContent: 'flex-start',
  },
  headerContainer:{
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
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#000',
    bottom: 0,
  },
  buttonIcon:{
    fontSize: 30,
    color: '#fff',
    paddingRight: 25,
    paddingLeft: 25,
  }
});