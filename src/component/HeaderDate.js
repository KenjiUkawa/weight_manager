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

    render() {

        return (

            <View style={styles.date}>
                <Text style={styles.dateText}>
                    {this.props.year}
                </Text>

                <Text style={styles.monthDayText}>
                    {this.props.monthDay}
                </Text>

                <Text style={styles.dateText}>
                     {this.props.dayOfWeek}
                </Text>
            </View>

        );
    }
}