import { View, Text, Button, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useEffect, useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {

    const user = {
        kadi: 'hayko',
        sifre: '123'
    }

    const [butondurum, setButondurum] = useState(true)
    const [username, setUsername] = useState<string>('')
    const [userpass, setUserpass] = useState<string>('')

    useEffect(() => {
        if (user.kadi == username && user.sifre == userpass) {
            setButondurum(false)
        } else {
            setButondurum(true)
        }
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <TextInput
                placeholder='Kullanıcı Adınızı Girin'
                onChangeText={(val) => setUsername(val)}
            />
            <TextInput
                placeholder='Şifrenizi Girin'
                onChangeText={(val) => setUserpass(val)}
            />
            <Button
                title="Go to Detail"
                onPress={() => navigation.navigate('Detail')}
                disabled={butondurum}
            />
            <Button
                title="Go to Detail"
                onPress={() => navigation.navigate('Detail')}
                disabled={user.kadi !== username || user.sifre !== userpass}
            />
        </View>
    );
}