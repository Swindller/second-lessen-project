import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SecendLessonFooter() {
    return (
    <View
        style={{
            backgroundColor: 'red',
            marginBottom: 10,
        }}>
        <Text 
        style={{
            fountSize: 18,
            color: 'white',
            textAlign: 'center',
        }}>
        All rights reserved by Berkay Mustafa Öcal 2025
        </Text>
    </View>
    );
}