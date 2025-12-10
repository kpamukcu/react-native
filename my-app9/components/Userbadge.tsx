import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


interface UserBadgeProps {
    name: string,
    adres: string
}


export default function Userbadge({ adres, name }: UserBadgeProps) {

    return (
        <View>
            <Text>{name}</Text>
            <Text>{adres}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})