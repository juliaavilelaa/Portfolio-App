import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from "react-native";
import Navbar from "./components/navbar";

export default function SobreMim() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Navbar current="sobre-mim" />
        <Text style={styles.title}>Sobre mim</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Meu nome é{" "}
          <Text style={styles.boldText}>Júlia Vilela Cintra Galvão</Text>, sou
          estudante de Ciência da Computação na{" "}
          <Text style={styles.boldText}>Universidade Católica de Pernambuco 
          (UNICAP)</Text>. Tenho grande interesse por programação e gosto de
          aprofundar meu conhecimento em pesquisas e projetos que unam lógica,
          criatividade e tecnologia.
          {"\n\n"}O gosto por desafios lógicos me levou à{" "}
          <Text style={styles.boldText}>programação competitiva</Text>, onde,
          desde o final de 2023, participo do Projeto de Extensão da UNICAP,
          aprimorando minhas habilidades e participando ativamente da
          comunidade, inclusive em eventos nacionais e na organização de
          workshops introdutórios.
          {"\n\n"}
          Atualmente, também estou aprofundando meus conhecimentos na área de{" "}
          <Text style={styles.boldText}>redes</Text>, buscando explorar novos
          desafios e formas de aplicar meu aprendizado para contribuir com o
          desenvolvimento tecnológico nesse campo.
        </Text>
      </View>
      <View style={styles.contactContainer}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.instagram.com/juliaavilelaa")}
          style={styles.iconButton}
        >
          <Image
            source={require("../assets/images/instagram.png")}
            style={styles.icon}
            accessibilityLabel="Instagram"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.linkedin.com/in/júlia-vilela-a5b235266/")}
          style={styles.iconButton}
        >
          <Image
            source={require("../assets/images/linkedin.png")}
            style={styles.icon}
            accessibilityLabel="LinkedIn"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/juliaavilelaa")}
          style={styles.iconButton}
        >
          <Image
            source={require("../assets/images/github.png")}
            style={styles.icon}
            accessibilityLabel="GitHub"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#D0D5CE" },
  header: {
    backgroundColor: "#959D90",
    paddingTop: 90,
    paddingBottom: 16,
    paddingHorizontal: 0,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "Platypi-ExtraBold",
    fontSize: 32,
    color: "#222",
    marginLeft: 24,
    marginTop: 8,
  },
  content: {
    padding: 24,
    flex: 1,
  },
  text: {
    fontFamily: "Quicksand-Regular",
    fontSize: 18,
    color: "#222",
  },
  boldText: {
    fontFamily: "Quicksand-Bold",
    fontSize: 18,
    color: "#222",
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 34,
    gap: 24,
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
