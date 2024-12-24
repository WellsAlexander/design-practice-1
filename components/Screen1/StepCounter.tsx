import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import ContentBubble from "./ContentBubble";

interface StepCounterProps {
  progress: Animated.Value; // Progress is an animated value (0 to 1)
  percentage: number; // Percentage value (e.g., 0 to 100)
}

const StepCounter: React.FC<StepCounterProps> = ({ progress, percentage }) => {
  return (
    <ContentBubble
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      minHeight={120}
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
                outputRange: ["-8%", "92%"], // The text moves from 0% to 68%
              }),
            },
          ]}
        >
          {percentage}%
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
    height: 10,
    backgroundColor: "#4a4a4a",
    borderRadius: 5,
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
    top: 40,
    fontWeight: "200",
    fontSize: 13,
  },

  section: {
    backgroundColor: "#2d2d36",
    borderRadius: 35,
    padding: 15, // Inside padding
    paddingLeft: 20,
    marginHorizontal: 3,
    marginVertical: 2, // Up and down
    minHeight: 120,
  },

  text: {
    color: "white",
    fontSize: 20,
  },
});

export default StepCounter;
