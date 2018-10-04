import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import {goToOtherPages} from './navigation';



export default class PostsList extends Component {

	static propTypes = {
		navigator: PropTypes.object,
		componentId: PropTypes.string
	};

  constructor(props) {
    super(props);

    this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
  }

  pushViewPostScreen() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'ViewPost',
        passProps: {
          text: 'Some props that we are passing'
        },
        options: {
          topBar: {
            title: {
              text: 'Post1'
            }
          }
        },
        bottomTabs: {

  		},
      }
    });
  }





  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}  onPress={this.pushViewPostScreen}>Posts List Screen</Text>
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