import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	StatusBar
} from 'react-native';
import HeaderContent from '../component/HeaderContent';
import NumberInput from '../component/NumberInput';
import {bottomTabs} from './navigation';
import {Navigation} from 'react-native-navigation';


export default class Setting extends Component {
	render() {
		return (
			<View style={styles.container}>
			<StatusBar barStyle="light-content" hidden={false}/>
				<View style={styles.section}>

					<Text style={styles.settingHedding}>目標</Text>

					<View style={styles.settingInput}>
                    	<NumberInput text={'体重'}></NumberInput>
                    	<NumberInput text={'体脂肪'}></NumberInput>
                    	<NumberInput text={'筋肉量'}></NumberInput>
                    	<NumberInput text={'ウエスト'}></NumberInput>
                    </View>

                </View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333',
		paddingTop: 40,
	},
	section: {
		flex: 1,
		maxWidth: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	settingHedding: {
		flex: 1,
		fontSize: 25,
		color: '#fff',
		marginLeft: 10,
		marginTop: 20,
	},
	settingInput: {
		flex: 3,
		justifyContent: 'space-between',
		alignItems: 'center',
	}
});
