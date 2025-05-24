import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.content}>
        <Image
          source={require('../assets/images/minha-foto.jpeg')}
          style={styles.foto}
        />
        <View style={styles.buttons}>
          <Link href="/sobre-mim" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>sobre mim</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/experiencias" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>experiências</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/projetos" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>projetos</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/jogo-da-senha" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>jogo da senha</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <Link href="/sobre-app" asChild>
        <TouchableOpacity style={styles.infoButton}>
          <Image
            source={require('../assets/images/information.png')}
            style={styles.infoIcon}
          />
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0D5CE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: 55,
    marginBottom: 55,
  },
  foto: {
    width: 240,
    height: 240,
    borderRadius: 120,
    marginBottom: 70,
    borderWidth: 2,
    borderColor: '#3C5759',
  },
  buttons: {
    width: 250,
    gap: 16,
  },
  button: {
    backgroundColor: '#3C5759',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 0,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
  },
  infoButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIcon: {
    width: 28,
    height: 28,
    tintColor: '#222',
  },
});