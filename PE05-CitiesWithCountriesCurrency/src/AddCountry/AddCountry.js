import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddCountry({ addCountry }) {
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');

  const handleAdd = () => {
    if (country && currency) {
      addCountry({ country, currency });
      setCountry('');
      setCurrency('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
        style={styles.input}
      />
      <TextInput
        placeholder="Currency"
        value={currency}
        onChangeText={setCurrency}
        style={styles.input}
      />
      <Button title="Add Country" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
  },
});
