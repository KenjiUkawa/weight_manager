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
import { goHome, goToDayBefore } from '../navigation'




export default class DayBefore extends React.Component {

  constructor(props) {
    super(props);
    // Although dont set state below it's needed to setState
    this.state = {
    };
    // must bind function to set state in componentDidMount otherwise get undefind
    this._getPageIndex=this._getPageIndex.bind(this);
  }

  componentDidMount(){
    this._getPageIndex();
  }

  async _getPageIndex(){
    // test setting value '-1'. remove later one line below
    await AsyncStorage.setItem('pageIndex','-1');
    await AsyncStorage.getItem('pageIndex',(err,value)=>{
      value=JSON.parse(value);
      this.setState({'pageIndex': value});
    });
  }



  /*--------------- Go to Day before -------------*/
  async _goToDayBefore(pageIndex){
    await AsyncStorage.getItem('pageIndex',(err,value)=>{
      value=JSON.parse(value);
      value--;
      value=JSON.stringify(value);
      AsyncStorage.setItem('pageIndex',value);
    })

    goToDayBefore();

  }






    render() {

      console.log(this.state.pageIndex);

      let dayBefore=new Date(new Date().setDate(new Date().getDate()+this.state.pageIndex)),
          getYear=dayBefore.getFullYear(),
          getMonthDay=(dayBefore.getMonth()+1)+'.'+dayBefore.getDate(),
          getDayOfWeek=["SUN","MON","TUE","WED","THU","FRI","SAT"][dayBefore.getDay()],
          primaryId=dayBefore.getFullYear()+''+(dayBefore.getMonth()+1)+''+dayBefore.getDate();

      console.log('dayBefore: '+dayBefore);
      console.log(getYear+', '+getMonthDay+', '+getDayOfWeek);
      console.log('primaryId: '+primaryId);

      // set state again
      this.state = {
        pageIndex:this.state.pageIndex,
        currentDay: primaryId,
        year: getYear,
        monthDay: getMonthDay,
        dayOfWeek: getDayOfWeek,
      };

      console.log('currentDay: '+this.state.currentDay);


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