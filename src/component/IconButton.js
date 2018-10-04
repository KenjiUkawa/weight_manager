import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    icon:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 10,
    }
});

const IconButton = (props) => {
  const {
    onPress,
    children,
    style,
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.icon}>{children}</View>
    </TouchableOpacity>
  );
};

export default IconButton;
