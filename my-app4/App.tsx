import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {Array.from({ length: 10 }).map((_, i) => (
        <View key={i} style={styles.item}>
          <Text>My-App4 {i + 1} </Text>
        </View>
      ))}

      <Image source={require('./assets/web.webp')} />
      <Image source={require('./assets/web.webp')} />
      <Image source={require('./assets/web.webp')} />


      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center'
  },
  item: {
    width: '90%',
    padding: 10,
    backgroundColor: '#a8d2ffff',
    margin: 5,
    borderRadius: 10
  }
});
