import { StyleSheet, View, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HelloWave />
      <View style={styles.infoBox}>
        <Text style={styles.text}>Aaron J. Smith</Text>
        <Text style={styles.text}>MS in Computer Science</Text>
        <Text style={styles.text}>City University of Seattle</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  infoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: 'black', // Ensures visibility no matter the theme
    marginVertical: 4,
  },
});