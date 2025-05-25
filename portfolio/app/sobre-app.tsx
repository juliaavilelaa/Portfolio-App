import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

export default function SobreApp() {
  const router = useRouter();

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/")}
      >
        <Text style={styles.backText}>&lt;</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.sectionTitle}>Tecnologias e módulos utilizados:</Text>
      <View style={styles.list}>
        <Text style={styles.item}>
          • <Text style={styles.bold}>React Native:</Text> Base para o desenvolvimento do aplicativo.
        </Text>
        <Text style={styles.item}>
          • <Text style={styles.bold}>Expo:</Text> Facilitou o desenvolvimento, testes e a build do app.
        </Text>
        <Text style={styles.item}>
          • <Text style={styles.bold}>TypeScript:</Text> Utilizado em todo o projeto para organização do código.
        </Text>
        <Text style={styles.item}>
          • <Text style={styles.bold}>Expo Router:</Text> Utilizado para gerenciar rotas e navegação entre as páginas.
        </Text>
        <Text style={styles.item}>
          • <Text style={styles.bold}>APIs Essenciais:</Text> Integração de funcionalidades como <Text style={styles.bold}>Alert</Text>, <Text style={styles.bold}>Linking</Text> e <Text style={styles.bold}>Keyboard</Text>.
        </Text>
      </View>
      <Text style={styles.comment}>
        Projeto individual desenvolvido para a cadeira de Programação Web e Mobile. O objetivo foi criar um currículo/portfólio em React Native para aplicações móveis.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#D0D5CE",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  backButton: {
    position: "absolute",
    top: 48,
    left: 24,
    padding: 8,
    zIndex: 10,
  },
  backText: {
    fontSize: 32,
    color: "#3C5759",
    fontWeight: "bold",
  },
  title: {
    fontFamily: "Platypi-ExtraBold",
    fontSize: 28,
    color: "#222",
    marginBottom: 18,
    marginTop: 50,
    textAlign: "center",
  },
  sectionTitle: {
    fontFamily: "Quicksand-Bold",
    fontSize: 20,
    color: "#3C5759",
    marginBottom: 12,
    textAlign: "center",
  },
  list: {
    alignSelf: "stretch",
    marginBottom: 18,
    paddingLeft: 12,
  },
  item: {
    fontFamily: "Quicksand-Regular",
    fontSize: 17,
    color: "#222",
    marginBottom: 8,
  },
  bold: {
    fontFamily: "Quicksand-Bold",
    color: "#192524",
  },
  comment: {
    fontFamily: "Quicksand-Regular",
    fontSize: 15,
    color: "#3C5759",
    marginTop: 12,
    marginBottom: 8,
    textAlign: "center",
  },
});
