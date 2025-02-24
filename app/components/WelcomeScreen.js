import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
        <View style={{ flex: 1}}>
            <Text
                style={{ 
                    padding: 40, 
                    fontSize: 30, 
                    color: 'black',
                    textAlign: 'center'
                }}>
                Welcome to the Second Lesson
                </Text>
                <Text
                style={{ 
                    padding: 40, 
                    fontSize: 30, 
                    color: 'black',
                    textAlign: 'center',
                    marginVertical:8,
                }}>
                    Second Lesson is a component and firs screen lesson.
                </Text>
        </View>
    );
}