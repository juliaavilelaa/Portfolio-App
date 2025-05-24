import { View, Text, StyleSheet } from 'react-native';
import Navbar from './components/navbar';

export default function Projetos() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Navbar current="projetos" />
        <Text style={styles.title}>Projetos</Text>
      </View>
      <View style={styles.content}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#D0D5CE' },
  header: {
    backgroundColor: '#959D90',
    paddingTop: 90,
    paddingBottom: 16,
    paddingHorizontal: 0,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'Platypi-ExtraBold',
    fontSize: 32,
    color: '#222',
    marginLeft: 24,
    marginTop: 8,
  },
  content: {
    padding: 24,
  },
  text: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 18,
    color: '#222',
  },
});