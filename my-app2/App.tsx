import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const { height, width } = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <Text>Kaan Pamukcu ile React Native Dersleri</Text>
      <Text>Ekran Ölçüleri: <Text>{Math.round(width)}px x {Math.round(height)}px</Text>  </Text>

      <Image source={{ uri: 'https://aribilgi.com/wp-content/uploads/2020/09/cropped-logo-1.png.webp' }} style={styles.image} resizeMode='contain' />

      <Image source={require('./assets/web.webp')} style={styles.image} />
      <Image source={require('./assets/grafik.webp')} resizeMode='cover' style={styles.image} />
      <ImageBackground source={require('./assets/back.avif')} style={styles.bg}>
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 25 }}>Bu BackGround Görseldir</Text>
      </ImageBackground>

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '95%',
    height: '20%',
    marginVertical: 5
  },
  bg:{
    width:'100%',
    height:200,
    justifyContent:'center',
    alignItems:'center'
  }
});
