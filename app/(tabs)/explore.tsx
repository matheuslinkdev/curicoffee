import CenterContainer from '@/components/Custom/CenterContainer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text } from 'react-native';


export default function TabTwoScreen() {
  return (
    <CenterContainer>
      <Text style={styles.text}>Curicoffee</Text>
    </CenterContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
