import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import Navbar from "./components/navbar";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 16;
const CARD_WIDTH = width * 0.85;

const projetos = [
  {
    id: "1",
    title: "Programação Competitiva",
    description:
      "A programação competitiva é uma atividade que envolve resolver problemas complexos em um ambiente de competição. Ela desenvolve habilidades de resolução de problemas, lógica e trabalho em equipe. O grupo de programação da UNICAP é de grande importância para mim, já que, para além do desenvolvimento técnico e estratégico que proporciona, destaco a união do grupo, que torna o aprendizado muito mais divertido, e os desafios encontrados no dia a dia se tornam mais leves.",
    image: require("../assets/images/foto-workshop-programacao.jpeg"),
  },
  {
    id: "2",
    title: "Portfólio Web",
    description:
      "Um portfólio web responsivo, desenvolvido com HTML, CSS e JavaScript para apresentar meus projetos e experiências. O foco foi criar uma plataforma acessível e que demonstre minhas habilidades em desenvolvimento. Este projeto está hospedado na plataforma Vercel, e você pode acessá-lo clicando no botão abaixo.",
    image: require("../assets/images/print-web.png"),
    link: "https://portfolio-web-omega-two.vercel.app",
  },
];

export default function Projetos() {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const cardWidth = CARD_WIDTH + CARD_MARGIN * 2;
    const slide = Math.round(event.nativeEvent.contentOffset.x / cardWidth);
    setIndex(slide);
  };

  const goToSlide = (i: number) => {
    flatListRef.current?.scrollToIndex({ index: i, animated: true });
  };

  const handleOpenLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Navbar current="projetos" />
        <Text style={styles.title}>Projetos</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          ref={flatListRef}
          data={projetos}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH + CARD_MARGIN * 2}
          contentContainerStyle={{
            alignItems: "center",
            paddingHorizontal: (width - CARD_WIDTH) / 2 - CARD_MARGIN,
          }}
          keyExtractor={(item) => item.id}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.projectTitle}>{item.title}</Text>
              <Text style={styles.projectDescription}>{item.description}</Text>
              {item.link && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleOpenLink(item.link)}
                >
                  <Text style={styles.buttonText}>Acessar site</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
        <View style={styles.dotsContainer}>
          {projetos.map((_, i) => (
            <TouchableOpacity key={i} onPress={() => goToSlide(i)}>
              <View style={[styles.dot, index === i && styles.dotActive]} />
            </TouchableOpacity>
          ))}
        </View>
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
    flex: 1,
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    alignItems: "center",
    marginHorizontal: CARD_MARGIN,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  image: {
    width: CARD_WIDTH - 32,
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
    resizeMode: "cover",
  },
  projectTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#222",
    marginBottom: 8,
    textAlign: "center",
  },
  projectDescription: {
    fontFamily: "Quicksand-Regular",
    fontSize: 16,
    color: "#222",
    textAlign: "center",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#959D90",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#959D90",
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: "#3C5759",
  },
});
