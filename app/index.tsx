import React, { useState, useEffect } from "react";
// Import components
import {
  WelcomeUser,
  StepCounter,
  DailyActivity,
  Workouts,
} from "@/components/Screen1";
// Import React Native components
import { StyleSheet, ScrollView, StatusBar, Animated } from "react-native";

export default function Index() {
  const [progress] = useState(new Animated.Value(0));
  const [percentage, setPercentage] = useState(0);

  let stepsWalked = 13000;
  let stepsGoal = 16000;

  // Simulate loading progress
  useEffect(() => {
    Animated.timing(progress, {
      toValue: stepsWalked / stepsGoal, // Progress to 100%
      duration: 2000, // Duration of the animation (2 seconds)
      useNativeDriver: false,
    }).start();

    // Listen for progress updates and calculate percentage
    const interval = setInterval(() => {
      progress.addListener((state) => {
        // state.value is the animated value from 0 to 1
        setPercentage(Math.floor(state.value * 100));
      });
    }, 100); // Update every 100ms

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#13141b" barStyle="light-content" />
      <WelcomeUser />
      <StepCounter progress={progress} percentage={percentage} />
      <DailyActivity />
      <Workouts />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#090b17",
  },
});
