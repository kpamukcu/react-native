import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';


const DATA = [
  { id: '1', title: 'Elma' },
  { id: '2', title: 'Armut' },
  { id: '3', title: 'Muz' },
  { id: '4', title: 'Çilek' },
  { id: '5', title: 'Kivi' },
]


export default function App() {

  /*   
  const renderItem = (nesne) => ( çalışacak yapı )
  FlatList’in her elemanı için ekranda ne oluşacağını belirleyen fonksiyondur


  Nesne:
  { item }: { item: { id: string, title: string } }

  Çaşlışacak Yapı:
    <View>
      <Text style={styles.item}>{item.title}</Text>
    </View>

  */

  const renderItem = ({ item }: { item: { id: string, title: string } }) => (
    <View>
      <Text style={styles.item}>{item.title}</Text>
    </View>
  )

  return (
    <View>
      <FlatList data={DATA} keyExtractor={item => item.id} renderItem={renderItem} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 16,
  },
  item: {
    backgroundColor: '#e3f2fd',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 6
  }
});