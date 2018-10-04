import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    date:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateText:{
        color: '#fff',
        fontSize: 18,
    },
    monthDayText:{
        color: '#fff',
        fontSize: 27,
        paddingRight: 20,
        paddingLeft: 20,
    }
});


export default class HeaderDate extends Component {

    constructor(props) {
      super(props);

      this.state = {
        year: new Date().getFullYear(),
        monthDay: (new Date().getMonth()+1)+'.'+new Date().getDate(),
        dayOfWeek: ["SUN","MON","TUE","WED","THU","FRI","SAT"][new Date().getDay()],
      };
    }


    render() {
        return (

            <View style={styles.date}>
                <Text style={styles.dateText}>
                    {this.state.year}
                </Text>

                <Text style={styles.monthDayText}>
                    {this.state.monthDay}
                </Text>

                <Text style={styles.dateText}>
                     {this.state.dayOfWeek}
                </Text>
            </View>

        );
    }
}