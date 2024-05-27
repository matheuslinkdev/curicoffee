import { useEffect, useState } from 'react';
import { StyleSheet, Image, Platform, View, Text } from 'react-native';
import * as Location from "expo-location";
import CenterContainer from '@/components/Custom/CenterContainer';

export default function TabTwoScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log("Permissão concedida !!!")
      console.log(location.coords.longitude)
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <CenterContainer>
      <Text style={styles.text}>{text}</Text>
    </CenterContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
