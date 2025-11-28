import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const showInfo = () => {
    Alert.alert(
      'Bilgi',                          //Başlığı Oluşturur
      'Bu Bir Bilglendirme Kutusudur',  //Mesajı Oluşturur
      [
        { text: 'İptal', onPress: () => console.log('İptal Tıklandı') },      //Alert içindeki birinci butonu oluşturur
        { text: 'Devam', onPress: () => console.log('Devam Et Tıklandı') }    //Alert içindeki ikinci butonu oluşturur
      ]
    )
  }

  const info = () => {
    Alert.alert(
      'TouchableOpacity Buton',
      'Touchable Buton Açıldı',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Tıklandı') },
        { text: 'Ok', onPress: () => console.log('Ok Tıklandı') }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, textAlign:'center', marginBottom:25}}>
        Kaan Pamukcu ile <Text style={{ fontWeight: 900 }}>React Native</Text> Dersleri
        <Text> Alert Api ile Bildirim Gösterme</Text>
      </Text>

      <Button title='Normal Buton' onPress={showInfo} />

      <TouchableOpacity style={styles.btn2} onPress={info}>
        <Text>Touchable Buton</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2: {
    backgroundColor: 'orange',
    padding: 15
  }
});
