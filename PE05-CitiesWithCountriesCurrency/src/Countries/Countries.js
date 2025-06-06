import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CenterMessage from '../components/CenterMessage';

export default function Countries({ countries }) {
  return (
    <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
      <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
        {!countries.length && <CenterMessage message="No saved countries!" />}
        {countries.map((item, index) => (
          <View key={index} style={styles.countryContainer}>
            <Text style={styles.country}>{item.country}</Text>
            <Text style={styles.currency}>{item.currency}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  country: {
    fontSize: 20,
  },
  currency: {
    color: '#888',
  },
});
