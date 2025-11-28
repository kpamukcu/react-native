import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const { height, width } = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <Text>Kaan Pamukcu ile React Native Dersleri</Text>
      <Text>Ekran Ölçüleri: <Text>{Math.round(width)}px x {Math.round(height)}px</Text>  </Text>
      <Image source={require('./assets/web.webp')} style={styles.image} />
      <Image source={require('./assets/dijital.webp')} style={styles.image} />
      <Image source={require('./assets/grafik.webp')} resizeMode='cover' />
      <Image source={{ uri: 'https://aribilgi.com/wp-content/uploads/2020/09/cropped-logo-1.png.webp' }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    marginVertical: 10
  }
});
