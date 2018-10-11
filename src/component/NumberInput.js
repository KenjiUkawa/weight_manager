import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Modal,
	AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from './IconButton';
import TextButton from './TextButton';



export default class NumberInput extends Component {

  /*---------- display previous value if existing ----------*/
  componentDidMount() {
    let primaryId = JSON.stringify(this.props.currentDay),
        unit=this.props.text;

    console.log('NumberInput->primaryId: '+primaryId);

    AsyncStorage.getItem(primaryId).then((value) => {
      if (value !== null){
        value=JSON.parse(value);
        initialWeigth=value.weight;
        initialInnerFat=value.innerFat;

        if(unit==='体重'){
          this.setState({enteredNumber: initialWeigth});
        }else if(unit==='体脂肪'){
          this.setState({enteredNumber: initialInnerFat});
        }
      }
    }).done();
  }


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
  async storeData(numberFromInput, unit){

    // console.log(state.currentDay+','+numberFromInput);
    let primaryId = JSON.stringify(this.props.currentDay),
        storeValue={},
        key='';
    if(unit==='体重'){
      key='weight';
    }else if(unit==='体脂肪'){
      key='innerFat';
    }
    // console.log(key);

    // to use array inside of array, has to be "array[array]="
    // primaryId=JSON.stringify(primaryId);
    storeValue[key]=numberFromInput;
    storeValue=JSON.stringify(storeValue);

    // Store the data
    let existingValue= await AsyncStorage.getItem(primaryId);
    if(existingValue===null){
      await AsyncStorage.setItem(primaryId,storeValue);
      await AsyncStorage.getItem(primaryId,(err,value)=>{
        console.log(value);
      });
    }else{
      AsyncStorage.setItem(primaryId,existingValue,()=>{
        AsyncStorage.mergeItem(primaryId, storeValue,()=>{
          AsyncStorage.getItem(primaryId,(err,result)=>{
            console.log(result);
          });
        });
      });
      // await AsyncStorage.setItem(primaryId,existingValue+=storeValue);
      // AsyncStorage.getItem(primaryId,(err,result)=>{
      //   console.log(result);
      // });


    }


    console.log(primaryId+', '+storeValue);


    this.closeModal();


  } // storeData()


  /* check an entered number if number or not and add decial point */
	verifyNumber(number){
    // below numbers become string in newText
		let newText = '',
		    numbers = '0123456789.';

		for (var i=0; i < number.length; i++) {
		    if(numbers.indexOf(number[i]) > -1 ) {
		        newText = newText + number[i];
		    }else{
           		// your call back function
           		alert("数字を入力して下さい");
       		}
    	}

    	this.setState({ enteredNumber: newText });
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
   									maxLength={5}>
                </TextInput>
								<Text style={styles.modalUnit}>{unit}</Text>
							</View>

							<View style={styles.modalButtonContainer}>
								<TextButton
                  style={styles.modalButton}
                  onPress={(numberFromInput, unit) => this.storeData(this.state.enteredNumber, this.props.text)}>
                  <Text style={styles.modalButtonText}>OK</Text>
                </TextButton>

								<TextButton
                  style={styles.modalButton}
                  onPress={() => this.closeModal()}>
                  <Text style={styles.modalButtonText}>キャンセル</Text>
                </TextButton>
							</View>

						</View>
					</View>

				</Modal>

			</View>

		);

	}
}



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