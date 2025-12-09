import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    setInterval(() => { setSeconds(prev => prev + 1) }, 1000)
  }, [])

  /* 
  Alternatif
    useEffect(() => {

    const intervalId = setInterval(() => { setSeconds(prev => prev + 1) }, 1000)
    return () => clearInterval(intervalId)

  }, [])  
  */

  return (
    <View style={styles.container}>
      <Button
        title='Azalt'
        onPress={() => setCount(a => a - 1)}
      />

      <Text>Sayaç: {count}</Text>

      <Button
        title='Arttır'
        onPress={() => setCount(a => a + 1)}
      />

      <Text>{seconds}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
