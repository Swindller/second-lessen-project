import { Text, View } from "react-native";
import React from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import SecondLessonHeader from "./components/SecondLessonHeader";
import SecondLessonFooter from "./components/SecondLessonFooter";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}>
        <SecondLessonHeader />
        <WelcomeScreen />
        <SecondLessonFooter />
    </View>
  );
}