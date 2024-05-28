import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Mapbox, { Camera } from "@rnmapbox/maps";
import * as Location from "expo-location";

Mapbox.setAccessToken(
  "pk.eyJ1IjoibXRoc2xuazIyMDMiLCJhIjoiY2x3am9lYmVmMTJydjJpbnJveHZicXE0ZiJ9.DH5S6w7SbrPIDlo5ekoUEA"
);

const Map = () => {
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
      // console.log("Permissão concedida !!!");
      // console.log(location.coords.longitude);
      // console.log(location.coords.latitude);
    })();
  }, []);

  let text = "Aguardando Localização...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          {location && (
            <>
              <Camera
                zoomLevel={15}
                centerCoordinate={[
                  location.coords.longitude,
                  location.coords.latitude,
                ]}
                animationDuration={2000}
              />
              <Mapbox.PointAnnotation
                id="currentLocation"
                coordinate={[
                  location.coords.longitude,
                  location.coords.latitude,
                ]}
              >
                <View style={styles.marker}/>
                
              </Mapbox.PointAnnotation>
            </>
          )}
        </Mapbox.MapView>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {
    height: "90%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  map: {
    flex: 1,
  },
  marker: {
    backgroundColor: "#994507",
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  markerText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
