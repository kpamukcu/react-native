import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

export default function App() {

  const DATA = [
    { id: '1', urun: 'Ürün Adı 1', foto: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp', desc: 'Lorem Ipsum Dolor Sit Amet' },
    { id: '2', urun: 'Ürün Adı 2', foto: 'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp', desc: 'Lorem Ipsum Dolor Sit Amet' },
    { id: '3', urun: 'Ürün Adı 3', foto: 'https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp', desc: 'Lorem Ipsum Dolor Sit Amet' },
    { id: '4', urun: 'Ürün Adı 4', foto: 'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp', desc: 'Lorem Ipsum Dolor Sit Amet' },
    { id: '5', urun: 'Ürün Adı 5', foto: 'https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp', desc: 'Lorem Ipsum Dolor Sit Amet' },
    { id: '6', urun: 'Ürün Adı 6', foto: 'https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp', desc: 'Lorem Ipsum Dolor Sit Amet' }
  ]

  const addToCard = () => {
    Alert.alert(
      'Bilgi',
      'Ürün Sepete Eklendi',
      [
        { text: 'İptal', onPress: () => (Alert.alert('Bilgi', 'İşlem İptal Edildi')) },
        { text: 'Öde', onPress: () => (Alert.alert('Bilgi', 'Ödeme Alındı')) }
      ]
    )
  }

  const renderItem = ({ item }: { item: { id: string, urun: string, foto: string, desc: string } }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.foto }} style={{ width: '100%', height: 250 }} />
        <Text style={styles.text}>{item.urun}</Text>
        <Text>{item.desc}</Text>
        <TouchableOpacity style={styles.btn} onPress={addToCard}>
          <Text style={{ color: '#fff' }}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    )
  }

  // const renderItem = ({ item }: { item: { id: string, urun: string, foto: string, desc: string } }) => (
  //   <View style={styles.card}>
  //     <Image source={{ uri: item.foto }} style={{ width: '100%', height: 250 }} />
  //     <Text style={styles.text}>{item.urun}</Text>
  //     <Text>{item.desc}</Text>
  //     <TouchableOpacity style={styles.btn} onPress={addToCard}>
  //       <Text style={{ color: '#fff' }}>Sepete Ekle</Text>
  //     </TouchableOpacity>
  //   </View>
  // )


  return (
    <ScrollView nestedScrollEnabled>
      <FlatList data={DATA} keyExtractor={item => item.id} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
      <FlatList data={DATA} keyExtractor={item => item.id} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
      <FlatList data={DATA} keyExtractor={item => item.id} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  card: {
    padding: 5,
    width: 250,
    alignItems: 'center',
    borderWidth: .5,
    borderRadius: 10,
    height: 365,
    margin: 10
  },
  text: {
    fontSize: 20
  },
  btn: {
    marginTop: 10,
    backgroundColor: '#ff5500ff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10
  }
});
