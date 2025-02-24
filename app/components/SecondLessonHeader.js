import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SecondLessonHeader() {
    return (
      <View style={{  flex: 0.2, backgroundColor: 'red'}}>
        <Text
          style={{ padding: 40, fontSize: 30, color: 'white' }}
          numberOfLines={3}>
            Welcome to the Second Lesson
        </Text>
       </View> 
    );
}