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
import { goToAuth } from './navigation'
import {Navigation} from 'react-native-navigation';



export default class Setting extends React.Component {

	<View style={styles.container}>

		<Text style={styles.text}>Day before Page</Text>

	</View>



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
    text:{
    	flrx: 1,
    	textAlign: 'center',
    	marign: '0 auto',
    	color: '#fff',
    }
});