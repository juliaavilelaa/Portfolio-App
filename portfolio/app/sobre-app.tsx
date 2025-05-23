import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import Navbar from './components/navbar';

export default function SobreApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Sobre o App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D0D5CE' },
  text: { fontSize: 22, fontFamily: 'Quicksand-Regular', color: '#3C5759' },
});