import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import ContentBubble from "./ContentBubble";

interface StepCounterProps {
  progress: Animated.Value; // Progress is an animated value (0 to 1)
  percentage: number; // Percentage value of how much percent steps are complete (e.g., 0 to 100)
}

const StepCounter: React.FC<StepCounterProps> = ({ progress, percentage }) => {
  return (
    <ContentBubble
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        paddingHorizontal: 20,
        minHeight: 120,
      }}
    >
      {/* Step Counter as text */}
      <View style={styles.stepCounterText}>
        <Text style={styles.text}>Steps</Text>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 12 }]}>
          <Animated.Text
            style={[styles.text, { fontWeight: "bold", fontSize: 25 }]}
          >
            {Math.floor(percentage * 160)}
          </Animated.Text>{" "}
          / 16 000
        </Text>
      </View>

      {/* Step Counter Graph */}
      <View style={[styles.stepCounterGraph]}>
        <Animated.Text
          style={[
            styles.text,
            styles.percentageText,
            {
              left: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["-10%", "88%"], // The text moves from 0% to 68%
              }),
            },
          ]}
        >
          {percentage}%
        </Animated.Text>
        <Animated.Text
          style={[
            {
              color: "black",
              fontWeight: "bold",
              fontSize: 8,
              position: "absolute",
              top: 59,
              zIndex: 1, // Ensures this text is on top of all other elements
            },
            {
              left: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["-10%", "95%"], // The text moves from 0% to 68%
              }),
            },
          ]}
        >
          |
        </Animated.Text>
        {/* Loading bar */}
        <View style={[styles.loadingBarContainer]}>
          {/* Animated Green Bar */}
          <Animated.View
            style={[
              styles.loadingBar,
              {
                width: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>
      </View>
    </ContentBubble>
  );
};

const styles = StyleSheet.create({
  stepCounterText: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  stepCounterGraph: {
    minWidth: 150,
    position: "relative", // Required for absolute positioning of the percentage text
    justifyContent: "flex-end",
    marginVertical: 10,
    paddingRight: 10,
  },

  loadingBarContainer: {
    height: 13,
    backgroundColor: "#4a4a4a",
    borderRadius: 10,
    marginTop: 10,
    overflow: "hidden",
    position: "relative", // Needed for absolute positioning of the text
  },

  loadingBar: {
    height: "100%",
    backgroundColor: "#d3f763",
    borderRadius: 5,
  },

  percentageText: {
    position: "absolute",
    top: 38,
    fontWeight: "300",
    fontSize: 14,
  },

  text: {
    color: "white",
    fontSize: 20,
  },
});

export default StepCounter;
