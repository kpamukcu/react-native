import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, Button, FlatList } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {

  const name = 'Hayko Cepkin'

  const kurslar = [
    { id: '1', kursAdi: 'Web Tasarımı' },
    { id: '2', kursAdi: 'Grafik Tasarımı' },
    { id: '3', kursAdi: 'Dijital Pazarlama' }
  ]

  return (
    <View style={styles.titleContainer} >
      <Text style={styles.font}>Eveeet Kimden Geliyor?</Text>
      <Text style={{ color: '#ffff00', fontSize: 30 }}>Eveeet Kimden Geliyor?</Text>
      <Button title='Tıkla' onPress={() => { alert(name) }} />
      <FlatList
        data={kurslar}
        renderItem={({ item }) => <Text style={styles.box}>{item.kursAdi}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  arkaplan: { backgroundColor: '#123456' },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#123456',
    textAlign: 'center',
  },
  font: {
    color: '#fff',
    fontSize: 30
  },
  box: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    padding: 20,
    backgroundColor: 'pink',
    marginVertical: 5
  }
});
