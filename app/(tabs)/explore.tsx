import { useEffect, useState } from 'react';
import { StyleSheet, Image, Platform, View, Text } from 'react-native';

import CenterContainer from '@/components/Custom/CenterContainer';
import Map from '@/components/Map';

export default function TabTwoScreen() {
 

  return (
    <CenterContainer>
      <Map/>
    </CenterContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
