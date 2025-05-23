import { View, Text, StyleSheet } from 'react-native';
import Navbar from './components/navbar';

export default function SobreMim() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Navbar current="sobre-mim" />
        <Text style={styles.title}>sobre mim</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Meu nome é Júlia Vilela Cintra Galvão, sou estudante de Ciência da Computação na Universidade Católica de Pernambuco (UNICAP). Tenho grande interesse por programação e gosto de aprofundar meu conhecimento em pesquisas e projetos que unam lógica, criatividade e tecnologia.
        </Text>
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