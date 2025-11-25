import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {

  const name = 'Kaan'

  return (
    <View style={styles.titleContainer} >
      <Text style={styles.font}>Eveeet Kimden Geliyor?</Text>
      <Text style={{ color: '#ffff00', fontSize: 30 }}>Eveeet Kimden Geliyor?</Text>
      <Button title={name.toLowerCase()} onPress={() => { alert('deneme') }} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#123456',
    textAlign: 'center',
  },
  font: {
    color: '#fff',
    fontSize: 30
  }
});
