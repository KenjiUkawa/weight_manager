import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

export default class AddPost extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add Post Screen</Text>
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
    text:{
    	fontSize: 40,
    	color: '#fff',
    }
});