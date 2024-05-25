import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import CenterContainer from './../../components/Custom/CenterContainer';

export default function HomeScreen() {
  return (
   <CenterContainer>
    <Text style={styles.text}>Olá, bem vindo(a) ao App da CuriCoffee</Text>
   </CenterContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});