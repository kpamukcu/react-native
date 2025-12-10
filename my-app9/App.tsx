import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Staticbanner from './components/Staticbanner';
import Userbadge from './components/Userbadge';

export default function App() {

  const users = [
    { name: 'Hayko Cepkin', adres: 'hayko.com' },
    { name: 'Mahmut Tuncer', adres: 'mahmut.com' }
  ]

  return (
    <View style={styles.container}>
      <Text>My-App9 / Componentes / Props</Text>
      <Staticbanner />

      {
        users.map((u, index) => (<Userbadge name={u.name} adres={u.adres} key={index} />))
      }

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
});
