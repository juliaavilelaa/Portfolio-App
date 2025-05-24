import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Keyboard,
  Alert,
} from "react-native";
import Navbar from "./components/navbar";
import {
  generatePassword,
  checkGuess,
  HistoryEntry,
} from "../scripts/jogo-da-senha";

export default function JogoDaSenha() {
  const [password, setPassword] = useState(generatePassword());
  const [guess, setGuess] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    if (guess.length !== 4 || !/^\d{4}$/.test(guess)) {
      setMessage("Digite 4 dígitos!");
      return;
    }
    if (new Set(guess).size !== 4) {
      setMessage("Não repita dígitos!");
      return;
    }
    const { correctPosition, correctDigit } = checkGuess(password, guess);
    const newEntry = { guess, bulls: correctPosition, cows: correctDigit };
    setHistory([newEntry, ...history]);
    setGuess("");
    Keyboard.dismiss();

    if (correctPosition === 4) {
      setMessage("Parabéns! Você acertou!");
    } else {
      setMessage("");
    }
  };

  const handleRestart = () => {
    setPassword(generatePassword());
    setHistory([]);
    setGuess("");
    setMessage("");
  };

  const handleGiveUp = () => {
    Alert.alert(
      "Senha Revelada",
      `A senha era: ${password}`,
      [
        {
          text: "OK",
          onPress: () => handleRestart(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Navbar current="jogo-da-senha" />
        <Text style={styles.title}>Jogo da Senha!</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.instructions}>
          O Jogo da Senha (ou Bulls and Cows) é um desafio de lógica: você
          precisa descobrir uma senha de 4 dígitos únicos.{"\n\n"}A cada
          tentativa, o jogo te diz quantos números estão na{" "}
          <Text style={{ fontFamily: "Quicksand-Bold", color: "green" }}>
            posição certa (bulls)
          </Text>{" "}
          e quantos estão na{" "}
          <Text style={{ fontFamily: "Quicksand-Bold", color: "blue" }}>
            posição errada (cows).
          </Text>
          {"\n\n"}Use essas dicas para acertar a senha!
        </Text>
        <View style={styles.inputRow}>
          <TextInput
            style={[
              styles.input,
              message === "Parabéns! Você acertou!" && { opacity: 0.5 },
            ]}
            value={guess}
            onChangeText={setGuess}
            keyboardType="number-pad"
            maxLength={4}
            placeholder="1234"
            placeholderTextColor="#959D90"
            editable={message !== "Parabéns! Você acertou!"}
          />
          <TouchableOpacity
            style={[
              styles.button,
              message === "Parabéns! Você acertou!" && { opacity: 0.5 },
            ]}
            onPress={handleGuess}
            disabled={message === "Parabéns! Você acertou!"}
          >
            <Text style={styles.buttonText}>Tentar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: "#b94a48", marginLeft: 8 },
              message === "Parabéns! Você acertou!" && { opacity: 0.5 },
            ]}
            onPress={handleGiveUp}
            disabled={message === "Parabéns! Você acertou!"}
          >
            <Text style={[styles.buttonText, { color: "#fff" }]}>Desistir</Text>
          </TouchableOpacity>
        </View>
        {message ? <Text style={styles.message}>{message}</Text> : null}
        <FlatList
          data={history}
          keyExtractor={(_, idx) => idx.toString()}
          style={styles.history}
          ListHeaderComponent={() =>
            history.length > 0 ? (
              <View style={styles.historyHeader}>
                <Text style={styles.historyTitle}>Tentativa</Text>
                <Text style={styles.historyTitle}>Bulls</Text>
                <Text style={styles.historyTitle}>Cows</Text>
              </View>
            ) : null
          }
          renderItem={({ item }) => (
            <View style={styles.historyRow}>
              <Text style={styles.historyGuess}>{item.guess}</Text>
              <Text style={styles.historyBulls}>{item.bulls}</Text>
              <Text style={styles.historyCows}>{item.cows}</Text>
            </View>
          )}
        />
        <TouchableOpacity
          style={[
            styles.restartButton,
            message === "Parabéns! Você acertou!" &&
              styles.restartButtonSuccess,
          ]}
          onPress={handleRestart}
        >
          <Text
            style={[
              styles.restartText,
              message === "Parabéns! Você acertou!" &&
                styles.restartTextSuccess,
            ]}
          >
            Novo Jogo
          </Text>
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
    flex: 1,
    padding: 24,
    paddingTop: 16,
  },
  instructions: {
    fontFamily: "Quicksand-Regular",
    fontSize: 18,
    color: "#222",
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#3C5759",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 22,
    fontFamily: "Quicksand-Bold",
    width: 100,
    textAlign: "center",
    marginRight: 12,
    color: "#222",
  },
  button: {
    backgroundColor: "#3C5759",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Quicksand-Bold",
    fontSize: 18,
  },
  message: {
    fontFamily: "Quicksand-Bold",
    fontSize: 18,
    color: "#192524",
    marginBottom: 10,
    marginTop: 4,
  },
  history: {
    marginTop: 10,
    flexGrow: 0,
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    paddingHorizontal: 8,
  },
  historyTitle: {
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
    color: "#3C5759",
    width: 70,
    textAlign: "center",
  },
  historyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f7f4",
    borderRadius: 8,
    marginBottom: 4,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  historyGuess: {
    fontFamily: "Quicksand-Regular",
    fontSize: 18,
    color: "#222",
    width: 70,
    textAlign: "center",
  },
  historyBulls: {
    fontFamily: "Quicksand-Bold",
    fontSize: 18,
    color: "green",
    width: 70,
    textAlign: "center",
  },
  historyCows: {
    fontFamily: "Quicksand-Bold",
    fontSize: 18,
    color: "blue",
    width: 70,
    textAlign: "center",
  },
  restartButton: {
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "#959D90",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  restartButtonSuccess: {
    backgroundColor: "#192524",
  },
  restartText: {
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
    color: "#222",
  },
  restartTextSuccess: {
    color: "#D1EBDB",
  },
});
