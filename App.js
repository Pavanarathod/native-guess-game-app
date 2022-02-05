import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/StartGame";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess Number" />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
