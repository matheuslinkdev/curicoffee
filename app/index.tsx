import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React from "react";
import CenterContainer from "@/components/Custom/CenterContainer";
import { Link, useNavigation } from "expo-router"; // Importe useNavigation

const Inicio = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("(tabs)");
  };

  return (
    <CenterContainer>
      <View style={styles.background}>
        <View style={styles.overflow}>
          <Image
            source={require("@/public/coffee-logo.png")}
            style={styles.image}
          />
          <Text style={styles.title}>CuriCoffee</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            Descubra as melhores cafeterias de Curitiba e encontre o destino de
            sua próxima xícara de café.
          </Text>
          <TouchableHighlight
            style={styles.button}
            onPress={handlePress}
            underlayColor="#6D4320"
          >
            <Text
              style={{ color: "#fff", fontSize: 20, fontFamily: "NunitoBold" }}
            >
              Vamos Lá !
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </CenterContainer>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontFamily: "NovaMono",
    position: "absolute",
    alignSelf: "center",
    bottom: 60,
    fontSize: 34,
  },
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "#462402",
  },
  overflow: {
    backgroundColor: "#291700",
    position: "absolute",
    top: 0,
    alignSelf: "center",
    width: 500,
    height: 400,
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: 250,
  },
  image: {
    alignSelf: "center",
    position: "absolute",
    bottom: 80,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    width: 200,
    height: 60,
    backgroundColor: "#83511E",
    borderRadius: 15,
  },
  content: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    width: "90%",
    height: 250,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "NunitoBold",
  },
});
