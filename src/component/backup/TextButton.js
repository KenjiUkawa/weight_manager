import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    // apply css the <Text> of this parent around text that comes into the {children} and <TextButton> too.
});

const TextButton = (props) => {
  const {
    onPress,
    children,
    style,
  } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>{children}</TouchableOpacity>
  );
};

export default TextButton;
