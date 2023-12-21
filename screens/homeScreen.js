import react, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidArea} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Estação Espacial</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("eei");
          }}
        >
          <Text style={styles.textButton}>RASTREAR EEI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("meteor");
          }}
        >
          <Text style={styles.textButton}>METEOROS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
  },
  droidArea: {
    manginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleContainer: {
    backgroundColor: "white",
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontFamily: "fantasy",
  },
  button: {
    backgroundColor: "white",
    marginTop: 50,
    flex: 0.3,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 30,

    justifyContent: "center",
  },
  textButton: {
    fontSize: 35,
    fontFamily: "fantasy",
    textAlign: "center",
  },
});
