/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';
import HeaderContent from './src/component/HeaderContent';

import NumberInput from './src/component/NumberInput';



export default class App extends Component<{}> {

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
});