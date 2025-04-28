import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ inputValue, inputChange }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={inputValue}
        style={styles.input}
        placeholder="What needs to be done?"
        placeholderTextColor="#CACACA"
        selectionColor="#666666"
        onChangeText={inputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#ffffff',    // White background for the box
    borderRadius: 8,               // Rounded corners
    shadowColor: '#000',           // Soft black shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,                  // For Android shadow
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: 'transparent', // Inside stays clear
    borderRadius: 8,
  },
});

export default Input;
