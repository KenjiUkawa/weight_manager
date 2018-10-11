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
import { goToDayBefore } from '../navigation'



export default class Home extends React.Component {

  async componentDidMount() {
    await AsyncStorage.setItem('pageIndex','0');
    // await AsyncStorage.getItem('pageIndex',(err, value)=>{
    //   console.log(value);
    // });
  }


  // get date as for primary key
  state = {
    currentDay: new Date().getFullYear()+''+(new Date().getMonth()+1)+''+new Date().getDate(),
    year: new Date().getFullYear(),
    monthDay: (new Date().getMonth()+1)+'.'+new Date().getDate(),
    dayOfWeek: ["SUN","MON","TUE","WED","THU","FRI","SAT"][new Date().getDay()],
  };




  /*---------------- For debugging methods --------------*/
  // remove this value on asyncstorage
  _removeItem(primaryId){
    AsyncStorage.removeItem(primaryId);
    AsyncStorage.getItem(primaryId,(err,result)=>{
      console.log(result);
    });
  }

  _multiGetItem(){
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          let key = store[i][0];
          let value01 = store[i][1];

          console.log(key+', '+value01);
        });
      });
    });
  }

  _getItem(primaryId){
    const value=AsyncStorage.getItem(primaryId);
    if(value!=null){
      console.log(value);
    }
  }

  async _getStorageValue(primaryId){
    var value = await AsyncStorage.getItem(primaryId);
    console.log(value);
  }

  _getItemYesterday(primaryId){
    AsyncStorage.getItem(primaryId,(err, value) => {
      obj = JSON.parse(value);
      console.log(obj.weight);
    });
  }

  async _ckeckItem(primaryId){
    await AsyncStorage.getItem(primaryId,(err, values) => {
      values.map((values, i, value) => {
        console.log(value[i][0]+', '+value[i][1]);
      });
    });
  }

  async _ckeckDayBefore(){
    await AsyncStorage.getItem('pageIndex',(err,value)=>{
      pageIndex=JSON.parse(value);
      pageIndex--;
      // console.log('pageIndex: '+pageIndex);
    });

    let today=new Date(),
        dayBefore=today(today.setDate(today.getDate()+pageIndex)),
        getYear=dayBefore.getFullYear(),
        getMonthDay=(dayBefore.getMonth()+1)+'.'+dayBefore.getDate(),
        getDayOfWeek=["SUN","MON","TUE","WED","THU","FRI","SAT"][dayBefore.getDay()];

    // dayBefore=dayBfore.getFullYear()+''+(dayBfore.getMonth()+1)+''+dayBfore.getDate();
    console.log('pageIndex: '+pageIndex);
    console.log('pageIndex: '+dayBefore);
    console.log(getYear+', '+getMonthDay+', '+getDayOfWeek);


  }
  /*--------------- End 0f For debugging methods -------------*/



  /*--------------- Go to Day before -------------*/
  async _goToDayBefore(pageIndex){

    value=await AsyncStorage.getItem('pageIndex');
    console.log('original:'+value);
    value=JSON.parse(value);
    console.log('JSON.parse: '+value);
    value--;
    value=JSON.stringify(value);
    console.log('JSON.stringify: '+value);
    await AsyncStorage.setItem('pageIndex',value);

    goToDayBefore();

  }






    render() {


      // Check AsyncStorage for value currentDay
      let primaryId=JSON.stringify(this.state.currentDay),
          beginningOfMounth=new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          endOfMounth=new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);



        return (

            <View style={styles.container}>
                <View style={styles.main}>

                    <StatusBar barStyle="light-content" hidden={false}/>

                    {/* Header */}
                    <View style={styles.headerContainer}>

                        <IconButton
                          onPress={() => {
                            Navigation.push(this.props.componentId, {
                              component: {
                                name: 'DayBefore',
                              }
                            });
                          }}
                        >
                          <Icon name={"arrow-left-bold"} style={styles.arrow}></Icon>
                        </IconButton>

                        <HeaderDate
                          currentDay={this.state.currentDay}
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
                    <NumberInput
                      text={'体重'}
                      currentDay={this.state.currentDay}
                    >
                    </NumberInput>

                    <NumberInput
                      text={'体脂肪'}
                      currentDay={this.state.currentDay}
                    >
                    </NumberInput>

                </View>


                <View style={styles.footer}>

                  <IconButton>
                    <Icon name={'finance'} style={styles.buttonIcon}></Icon>
                  </IconButton>

                  <IconButton>
                    <Icon name={'tune'} style={styles.buttonIcon}></Icon>
                  </IconButton>


                </View>

                <View style={styles.systemButtonContainer}>

                  <IconButton onPress={()=>this._removeItem(primaryId)}>
                    <Icon name={'delete-outline'} style={styles.systemButtonIcon}></Icon>
                  </IconButton>

                  <IconButton onPress={()=>this._multiGetItem()}>
                    <Icon name={'playlist-check'} style={styles.systemButtonIcon}></Icon>
                  </IconButton>

                  <IconButton onPress={()=>this._getItemYesterday(primaryId)}>
                    <Icon name={'check'} style={styles.systemButtonIcon}></Icon>
                  </IconButton>

                  <IconButton onPress={()=>this._ckeckItem(primaryId)}>
                    <Icon name={'format-list-numbers'} style={styles.systemButtonIcon}></Icon>
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
  systemButtonIcon:{
    fontSize: 30,
    color: '#fff',
  },
  systemButtonContainer:{
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 60,
    bottom: 80,
  }
});