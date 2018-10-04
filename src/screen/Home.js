import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    AsyncStorage,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NumberInput from '../component/NumberInput';
import IconButton from '../component/IconButton';
import HeaderDate from '../component/HeaderDate';



export default class Home extends React.Component {


  // get date as for primary key
  state = {
    today: new Date().getFullYear()+''+(new Date().getMonth()+1)+''+new Date().getDate(),
    year: new Date().getFullYear(),
    monthDay: (new Date().getMonth()+1)+'.'+new Date().getDate(),
    dayOfWeek: ["SUN","MON","TUE","WED","THU","FRI","SAT"][new Date().getDay()],
    pageIndex: 0,
  };


  // remove this value on asyncstorage
  _removeItem(primaryId){
    AsyncStorage.removeItem(primaryId);
    AsyncStorage.getItem(primaryId,(err,result)=>{
      console.log(result);
    });
  }

  _dumpValues(){
    AsyncStorage.getAllKeys((err, keys) => {
      console.log(keys);
    });
  }

  _getItem(){
    let primaryId=this.state.today;
    // AsyncStorage.getItem(primaryId,(err, value) => {
    //   // console.log(value);
    // });
    // if(primaryId){
    //   console.log(primaryId+' is Exist!');
    // }
    const value=AsyncStorage.getItem(primaryId);
    if(value!=null){
      console.log(value);
    }

  }

  async _getStorageValue(){
    let primaryId=this.state.today;
    primaryId=JSON.stringify(primaryId);
    var value = await AsyncStorage.getItem(primaryId);
    console.log(value);
  }

  _getItemYesterday(){
    AsyncStorage.getItem('20181002',(err, value) => {
      console.log(value);
    });
  }




    render() {


      // Check AsyncStorage for value today
      let primaryId=this.state.today,
          beginningOfMounth=new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          endOfMounth=new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
      // console.log(primaryId+', '+beginningOfMounth+', '+endOfMounth);
      // get pageIndex
      // AsyncStorage.getItem(primaryId, (err, result) => {
      //   console.log(result);
      // });
      AsyncStorage.getItem(primaryId, (err, result) => {
        console.log(result);
      });
      // check today whether beginning or end of mounth
      // if(primaryId)
      // AsyncStorage.getItem(primaryId, (err, result) => {
      //   console.log(result);
      // });



        return (

            <View style={styles.container}>
                <View style={styles.main}>

                    <StatusBar barStyle="light-content" hidden={false}/>

                    {/* Header */}
                    <View style={styles.headerContainer}>

                        <IconButton>
                          <Icon name={"arrow-left-bold"} style={styles.arrow}></Icon>
                        </IconButton>

                        <HeaderDate
                          today={this.state.today}
                          year={this.state.year}
                          monthDay={this.state.monthDay}
                          dayOfWeek={this.state.dayOfWeek}
                        />

                        <IconButton>
                          <Icon name={"arrow-right-bold"} style={styles.arrowOff}></Icon>
                        </IconButton>

                    </View>

                </View>

                {/* Number input section */}
                <View style={styles.main}>
                    <NumberInput text={'体重'} today={this.state.today}></NumberInput>

                    <NumberInput text={'体脂肪'} today={this.state.today}></NumberInput>

                </View>


                <View style={styles.footer}>

                  <IconButton>
                    <Icon name={'finance'} style={styles.buttonIcon}></Icon>
                  </IconButton>

                  <IconButton>
                    <Icon name={'tune'} style={styles.buttonIcon}></Icon>
                  </IconButton>


                </View>

                <View style={styles.systemButton}>

                  <IconButton onPress={()=>this._removeItem(this.state.today)}>
                    <Icon name={'delete-outline'} style={styles.buttonIcon}></Icon>
                  </IconButton>

                  <IconButton onPress={()=>this._dumpValues()}>
                    <Icon name={'playlist-check'} style={styles.buttonIcon}></Icon>
                  </IconButton>

                  <IconButton onPress={()=>this._getStorageValue()}>
                    <Icon name={'check'} style={styles.buttonIcon}></Icon>
                  </IconButton>

                </View>

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
  },
  systemButton:{
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    bottom: 80,
  }
});