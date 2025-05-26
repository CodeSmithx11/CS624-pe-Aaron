import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddCity({ addCity }) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleAdd = () => {
    if (city && country) {
      addCity({ city, country });
      setCity('');
      setCountry('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="City name"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="Country name"
        value={country}
        onChangeText={setCountry}
        style={styles.input}
      />
      <Button title="Add City" onPress={handleAdd} />
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
