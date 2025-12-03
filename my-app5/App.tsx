import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <>
      <ScrollView contentContainerStyle={styles.container} horizontal showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 30 }).map((_, i) => (
          <View key={i} style={styles.box}>
            <Text style={styles.letter}>My-App5 {i + 1} </Text>
          </View>
        ))}
        <StatusBar style="auto" />
      </ScrollView>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 24 }}>Yatay Kaydırma</Text>
      </View>
      <ScrollView style={styles.container} horizontal>
        <Image source={require('./assets/web.webp')} style={styles.gap} />
        <Image source={require('./assets/grafik.webp')} style={styles.gap} />
        <Image source={require('./assets/dijital.webp')} style={styles.gap} />
      </ScrollView>
      <ScrollView style={styles.container} horizontal>
        <Image source={require('./assets/web.webp')} style={styles.gap} />
        <Image source={require('./assets/grafik.webp')} style={styles.gap} />
        <Image source={require('./assets/dijital.webp')} style={styles.gap} />
      </ScrollView>
    </>



  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    backgroundColor: '#e65100'
  },
  box: {
    width: 100,
    height: 100,
    marginRight: 12,
    backgroundColor: '#ffe0b2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  },
  letter: {
    fontWeight: 800,
    color: '#e65100'
  },
  gap: {
    marginRight: 10
  }
});
