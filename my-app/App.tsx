import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const { height, width } = Dimensions.get('window')  //Ekran Ölçüleri Yakalanır

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Kaan Pamukcu ile <Text style={{ color: '#ffff00', fontWeight: 900 }}>React Native</Text> Dersleri</Text>
      <Text style={styles.text} >Ekran Ölçüleri: {Math.round(height)}px x {Math.round(width)}px</Text>
      <View style={{ borderWidth: 2, borderColor: '#ffff00', paddingVertical: 10, width: width * 0.9, height: height * 0.2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: width > 400 ? 35 : 20 }}>Responsive Tasarım</Text>
      </View>
      <Button title='Normal Buton' color={'#ff0000'} />
      <TouchableOpacity style={styles.tikla}>
        <Text style={styles.text} >Tıklanabilir Alan</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
  tikla:{
    backgroundColor: '#393939',
    paddingVertical: 8,
    paddingHorizontal:12
  }
});
