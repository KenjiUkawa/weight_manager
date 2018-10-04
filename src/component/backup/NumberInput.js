import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Modal,
	AsyncStorage,
} from 'react-native';
// react-native-vector-icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import IconButton from './IconButton';
import TextButton from './TextButton';

// to get current date and primaryID
let pageIndex = 0;


const styles = StyleSheet.create({
	container: {
		flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'flex-start',
        maxHeight: 70,
        marginRight: 10,
        marginLeft: 10,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#666',
	},
	hedding: {
		flex: 1,
		fontSize: 18,
		color: '#fff',
	},
	inputNumber:{
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 35,
		color: '#fff',
		textAlign: 'right',
	},
	unit:{
		flex: 1,
		fontSize: 20,
		color: '#fff',
		textAlign: 'center',
		paddingTop: 10,
		paddingRight: 30,
	},
	buttonIcon:{
        color: '#fff',
        fontSize: 25,
    },
    modalContainer:{
    	width: '100%',
    	height: '100%',
    	marginTop: 10,
    	marginRight: 'auto',
    	marginBottom: 'auto',
    	marginLeft: 'auto',
    	backgroundColor: 'rgba(0,0,0,.6)',
    },
    modalInner:{
    	width: '80%',
    	height: 200,
    	marginTop: '20%',
    	marginRight: 'auto',
    	marginBottom: 'auto',
    	marginLeft: 'auto',
    	backgroundColor: '#000',
    },
    inputContainer:{
    	flex: 1,
    	flexDirection: 'row',
    	justifyContent: 'center',
    	alignItems: 'center',
    	width: '80%',
    	maxHeight: '50%',
    	marginTop: 50,
    	marginRight: 'auto',
    	marginBottom: 'auto',
    	paddingBottom: 40,
    	marginLeft: 'auto',
    	paddingLeft: 20,
    },
    modalTextInput:{
    	flex: 4,
    	fontSize: 30,
		height: 50,
		textAlign: 'center',
		paddingRight: 10,
		paddingLeft: 5,
		backgroundColor: '#fff',
    },
    modalUnit:{
    	flex: 1,
		fontSize: 20,
		color: '#fff',
		justifyContent: 'center',
		textAlign: 'center',
		marginTop: 20,
		marginLeft: 10,
		paddingBottom: 30,
	},
    modalButtonContainer:{
    	flex: 1,
    	flexDirection: 'row',
    	justifyContent: 'center',
    	alignItems: 'center',
    	width: '80%',
    	height: 500,
    	top: 0,
    	marginTop: 'auto',
    	marginRight: 'auto',
    	marginBottom: 'auto',
    	marginLeft: 'auto',
    	// borderStyle: 'solid',
    	// borderWidth: 1,
    	// borderColor: 'red',
    },
    modalButton:{
		flex: 1,
      	justifyContent: 'center',
      	alignItems: 'center',
      	height: 40,
      	marginTop: 0,
      	marginRight: 5,
      	marginBottom: 0,
      	marginLeft: 5,
      	paddingTop: 10,
      	paddingRight: 15,
      	paddingBottom: 10,
      	paddingLeft: 15,
      	backgroundColor: '#666',
	},
	modalButtonText:{
		fontSize: 17,
      	color: '#fff',
      	marginTop: 0,
      	marginRight: 0,
      	marginBottom: 0,
      	marginLeft: 0,
      	backgroundColor: '#666',
	},
});

export default class NumberInput extends Component {

	/*-------------- show or close modal --------------*/
	state = {
		modalVisible: false,
  }
  openModal() {
	  this.setState({modalVisible:true}, ()=>{this.textInput.focus();});
  }
  closeModal() {
		  this.setState({modalVisible:false});
  }

  /*-------------- Store values --------------*/
  storeData(numberFromInput, unit){
    // get date as for primary key
    state={
    	today: new Date().getFullYear()+''+(new Date().getMonth()+1)+''+(new Date().getDate()-pageIndex),
    }
    // console.log(state.today+','+numberFromInput);
    let primaryId = state.today;
    let key='';
    if(unit==='体重'){
      key='weight';
    }else if(unit==='体脂肪'){
      key='innerFat';
    }

    // console.log(key);
    let storeValue={};
    // to use array inside of array, has to be "array[array]="
    storeValue[key]=numberFromInput;
    // to store a pageIndexKey for calc date and praimaryID
    storeValue['pageIndex']=pageIndex;
    // console.log(primaryId, storeValue);

    // Store the data
    AsyncStorage.setItem(primaryId, JSON.stringify(storeValue));
    AsyncStorage.getItem(primaryId, (err, result) => {
		  console.log(result);
    });

    this.closeModal();


  } // storeData()


  /* check an entered number if number or not and add decial point */
	verifyNumber(number){
		let newText = '';
		let numbers = '012345678';

		for (var i=0; i < number.length; i++) {
		    if(numbers.indexOf(number[i]) > -1 ) {
		        newText = newText + number[i];
		    }else{
           		// your call back function
           		alert("数字を入力して下さい");
       		}
    	}

    	// newText=newText.toFixed(2);

    	this.setState({ enteredNumber: newText });
	}



  // to access children's state from parent
  getState() {
    return this.state
  }



	render() {

		{/* get text value from the parent */}
		text=this.props.text;
		let unit='';

		if(text==='体重'){
			unit='kg';
		}else if(text==='体脂肪'){
      unit='%';
    }

		return (

			<View style={styles.container}>

				<Text style={styles.hedding}>{text}</Text>

				<Text style={styles.inputNumber}>{this.state.enteredNumber}</Text>
				<Text style={styles.unit}>{unit}</Text>

				<IconButton onPress={() => this.openModal()}
          title="Open modal">
					<Icon name={"dialpad"} style={styles.buttonIcon}></Icon>
				</IconButton>

				{/*------------------ Modal Numder input -------------------*/}
				<Modal visible={this.state.modalVisible} animationType={'fade'} onRequestClose={() => this.closeModal()} transparent={true}>

					<View style={styles.modalContainer}>
						<View style={styles.modalInner}>

							<View style={styles.inputContainer}>
								<TextInput
									style={styles.modalTextInput}
									keyboardType='number-pad'
									onChangeText={(number)=> this.verifyNumber(number)}
									ref={textInput=>{this.textInput=textInput;}}
   									value={this.state.enteredNumber}
   									maxLength={5}></TextInput>
								<Text style={styles.modalUnit}>{unit}</Text>
							</View>

							<View style={styles.modalButtonContainer}>
								<TextButton style={styles.modalButton} onPress={(numberFromInput, unit) => this.storeData(this.state.enteredNumber, this.props.text)}><Text style={styles.modalButtonText}>OK</Text></TextButton>
								<TextButton style={styles.modalButton} onPress={() => this.closeModal()}><Text style={styles.modalButtonText}>キャンセル</Text></TextButton>
							</View>

						</View>
					</View>

				</Modal>

			</View>

		);

	}
}