import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Dimensions, FlatList, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

//TypeScript ile datatype oluşturma
type Blog = {
  id: string,
  baslik: string,
  aciklama: string
}


const { height, width } = Dimensions.get("window");

// const data = [
//   { id: "1", baslik: "Başlık 1", desc: "Lorem Ipsum Dolor Sit Amet 1", foto: "" },
//   { id: "2", baslik: "Başlık 2", desc: "Lorem Ipsum Dolor Sit Amet 2", foto: "" },
//   { id: "3", baslik: "Başlık 3", desc: "Lorem Ipsum Dolor Sit Amet 3", foto: "" },
//   { id: "4", baslik: "Başlık 4", desc: "Lorem Ipsum Dolor Sit Amet 4", foto: "" },
// ];

export default function App() {
  /* Modals Start */
  const [visible, setVisible] = useState(false); // Card Modal
  const [yeni, setYeni] = useState(false); // New Post Modal
  const [bildirim, setBildirim] = useState(false); // Bildirim Modal
  const [user, setUser] = useState(false); // User Modal
  /* Modals End */

  /* Inputs Start */
  const [kesfet, setKesfet] = useState<any>(null); // Keşfet Input
  const [ad, setAd] = useState<any>(null)
  const [tel, setTel] = useState<any>(null)
  const [mail, setMail] = useState<any>(null)

  const [blogbaslik, setBlogbaslik] = useState<string>('')
  const [blogaciklama, setBlogaciklama] = useState<string>('')
  /* Inputs End */

  /* Bloglar Start */
  const [bloglar, setBloglar] = useState<Blog[]>([]);
  /* Bloglar End */

  /* VT Kaydet Start */
  //Add User Start
  const addUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        isim: ad,
        telefon: tel,
        eposta: mail
      }
      );
      console.log('Yeni Üye Kaydı Yapıldı. Üye ID:', docRef.id)
      setAd('');
      setTel('');
      setMail('');

    } catch (error) {
      console.log("Hata:", error)
    }
  }
  //Add User End

  //Add Blog Post Start
  const addBlogPost = async () => {
    try {
      const docRef = await addDoc(collection(db, 'blog'), {
        baslik: blogbaslik,
        aciklama: blogaciklama
      })

      console.log("Yeni Blog Yazısı Eklendi. Post ID: ", docRef.id)
      setBlogaciklama('')
      setBlogbaslik('')

    } catch (error) {
      console.log("Hata: ", error)
    }
  }
  //Add Blog Post End
  /* VT Kaydet End */


  /* Vt Veri Çek Start */
  const getBlogPosts = async () => {
    try {

      const querySnapShot = await getDocs(collection(db, 'blog'))

      const liste: Blog[] = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Blog, "id">)
      }));

      setBloglar(liste)

    } catch (error) {
      console.log("Hata: ", error)
    }
  }


  useEffect(() => {
    getBlogPosts();
  }, [])

  /* Vt Veri Çek End */


  const renderItemShortContent = ({ item }: { item: { id: string; baslik: string; aciklama: string } }) => (
    <TouchableOpacity
      onPress={() => {
        setVisible(true);
      }}
    >
      <View style={styles.card}>
        <View style={{ width: '30%' }}>
          <Text>Görsel</Text>
        </View>
        <View style={{ width: '70%' }}>
          <Text style={{ fontWeight: '600' }}>{item.baslik}</Text>
          <Text style={{ textAlign: 'justify' }}>{item.aciklama.substring(0, 130)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Merhaba 🖐</Text>
        <View style={styles.info}>
          <Text style={{ fontSize: 28, fontWeight: "900" }}>Keşfet</Text>

          <View style={{ flexDirection: "row", columnGap: 10 }}>
            <TouchableOpacity
              onPress={() => {
                setBildirim(true);
              }}
            >
              <Text style={{ fontSize: 24 }}>🔔</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setUser(true)}>
              <Text style={{ fontSize: 24 }}>👨‍💼</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextInput style={styles.textForm} value={kesfet} placeholder="🔍 Araştırmak İstediğin Bir Şey Yaz" onChangeText={setKesfet} />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, marginTop: 10 }}>
          <TouchableOpacity style={styles.kategori}>
            <Text>Tümü</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.kategori}>
            <Text>Teknoloji</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.kategori}>
            <Text>Tasarım</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.kategori}>
            <Text>Seyahat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.kategori}>
            <Text>Müzik</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.kategori}>
            <Text>Sinema</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.kategori}>
            <Text>Tiyatro</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.heading}>Popüler Gönderiler</Text>
        <FlatList data={bloglar} keyExtractor={(item) => item.id} renderItem={renderItemShortContent} />
        <TouchableOpacity style={styles.yeni} onPress={() => setYeni(true)}>
          <Text style={{ fontSize: 18, color: "#fff" }}>+ Yeni Gönderi</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={visible} animationType="slide">
        <Text>Modal Açıldı</Text>
        <Button title="Kapat" onPress={() => setVisible(false)} />
      </Modal>

      <Modal visible={yeni} animationType="slide">
        <View style={styles.modalStyle}>
          <View style={styles.modalHeader}>
            <Text style={{ fontSize: 20 }}>Yeni Gönderi Ekleme</Text>
            <TouchableOpacity onPress={() => setYeni(false)}>
              <Text>❌</Text>
            </TouchableOpacity>
          </View>
          <View style={{ rowGap: 10, marginTop: 35 }}>
            <TextInput placeholder="Başlık Girin" style={styles.textForm} value={blogbaslik} onChangeText={setBlogbaslik} />
            <TextInput placeholder="Açıklama Girin" multiline={true} style={styles.textFormMulti} numberOfLines={8} value={blogaciklama} onChangeText={setBlogaciklama} />
            <TouchableOpacity style={styles.yeni} onPress={addBlogPost}>
              <Text style={{ color: '#fff', fontSize: 18 }}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={bildirim} animationType="fade">
        <Text>Burası Bildirim Ekranı</Text>
        <Button title="Bildirim Ekranını Kapat" onPress={() => setBildirim(false)} />
      </Modal>

      <Modal visible={user} animationType="slide">
        <View style={styles.modalStyle}>
          <View style={styles.modalHeader}>
            <Text style={{ fontSize: 20 }}>Arı Bilişim Blog Üyeliği</Text>
            <TouchableOpacity onPress={() => setUser(false)}>
              <Text>❌</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signForm}>
            <TextInput placeholder="Adınız Soyadınız" value={ad} style={styles.userSignInput} onChangeText={setAd} />
            <TextInput placeholder="Telefon Numaranız" value={tel} style={styles.userSignInput} onChangeText={setTel} />
            <TextInput placeholder="E-Posta Adresiniz" value={mail} style={styles.userSignInput} onChangeText={setMail} />
            <TouchableOpacity style={styles.eventButton} onPress={addUser}>
              <Text style={{ fontSize: 16, color: '#fff' }}>Kayıt Ol</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 20,
  },
  card: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#d3d3d3",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    height: 120,
  },
  yeni: {
    backgroundColor: "#9900ff",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  textForm: {
    borderWidth: 1.2,
    borderRadius: 10,
    borderColor: "#d3d3d3",
    paddingHorizontal: 12,
  },
  textFormMulti: {
    borderWidth: 1.2,
    borderRadius: 10,
    borderColor: "#d3d3d3",
    paddingHorizontal: 12,
    height: 150,
    textAlignVertical: 'top'
  },
  kategori: {
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  modalStyle: {
    padding: 15
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userSignInput: {
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  eventButton: {
    backgroundColor: '#28a745',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 10
  },
  signForm: {
    rowGap: 10,
    marginTop: 30
  }
});

//<StatusBar style="auto" />
