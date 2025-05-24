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
    <ScrollView contentContainerStyle={styles.container}>
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
          • <Text style={styles.bold}>Expo Router:</Text> Utilizado gerenciar rotas e navegação entre as páginas, incluindo a lógica da Navbar.
        </Text>
        <Text style={styles.item}>
          •{" "}
          <Text style={styles.bold}>
            Componentes Visuais e Interativos (React Native):
          </Text>
          {"\n  "}↳ Uso de <Text style={styles.bold}>View, Text, Image</Text>{" "}
          (para imagens locais dos projetos),{" "}
          <Text style={styles.bold}>TouchableOpacity</Text> (para botões),{" "}
          <Text style={styles.bold}>FlatList</Text> (para o carrossel de
          projetos e histórico do jogo da senha) e{" "}
          <Text style={styles.bold}>Modal</Text> (para menus e interações).
        </Text>
        <Text style={styles.item}>
          • <Text style={styles.bold}>Estilização e Identidade Visual:</Text>
          {"\n  "}↳ <Text style={styles.bold}>StyleSheet</Text> para organização dos estilos, e fontes customizadas (
          <Text style={styles.bold}>Quicksand, Poppins, Platypi</Text>).
        </Text>
        <Text style={styles.item}>
          •{" "}
          <Text style={styles.bold}>APIs Essenciais (Expo/React Native):</Text>{" "}
          Integração de funcionalidades como{" "}
          <Text style={styles.bold}>Alert</Text> (para feedback ao usuário),{" "}
          <Text style={styles.bold}>Linking</Text> (para navegação a links
          externos) e <Text style={styles.bold}>Keyboard</Text> (para
          interação com o teclado).
        </Text>
      </View>
      <Text style={styles.comment}>
        Projeto individual desenvolvido para a cadeira de Programação Web e
        Mobile. O objetivo foi criar um currículo/portfólio em React Native para
        aplicações móveis, apresentando experiências, projetos, habilidades e um
        mini-jogo interativo.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D0D5CE",
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
  footer: {
    fontFamily: "Quicksand-Regular",
    fontSize: 15,
    color: "#3C5759",
    marginTop: 8,
    textAlign: "center",
  },
});
