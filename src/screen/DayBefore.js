import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';
import HeaderContent from '../component/HeaderContent';
import NumberInput from '../component/NumberInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from '../component/IconButton';



export default class DayBefore extends Component<{}> {

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.main}>

                    <StatusBar barStyle="light-content" hidden={false}/>

                    {/* Header */}
                    <HeaderContent></HeaderContent>

                </View>

                {/* Number input section */}
                <View style={styles.main}>
                    <NumberInput text={'体重'}></NumberInput>

                    <NumberInput text={'体脂肪'}></NumberInput>

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

        )
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