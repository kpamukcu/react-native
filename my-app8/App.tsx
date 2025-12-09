import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [visible, setVisible] = useState(false)

  //onRequestClose={() => setVisible(false)} android geri tuışu için şart

  return (
    <View style={styles.container}>
      <Text>Modal</Text>
      <Button title="Modal Aç" onPress={() => setVisible(true)} />

      <Modal animationType='slide' visible={visible} onRequestClose={() => setVisible(false)} transparent>
        <View style={styles.modal}>
          <Text>Modal Açıldı</Text>
          <Button title='Modal Kapat' onPress={() => setVisible(false)} />
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: '#ff8e8eff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
