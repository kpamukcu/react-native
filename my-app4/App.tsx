import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {Array.from({ length: 50 }).map((_, i) => (
        <View key={i}>
          <Text>My-App4 {i + 1} </Text>
        </View>
      ))}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center'
  },
});
