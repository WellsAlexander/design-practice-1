import { View, Text, StyleSheet, Animated } from "react-native";
import React from "react";
import ContentBubble from "./ContentBubble";

interface DailyActivityProps {
  progress: Animated.Value; // Progress is an animated value (0 to 1)
  stepNumber: number; // Percentage value (e.g., 0 to 100)
  calorieNumber: number;
  waterNumber: number;
}

const DailyActivity: React.FC<DailyActivityProps> = ({
  progress,
  stepNumber,
  calorieNumber,
  waterNumber,
}) => {
  return (
    <ContentBubble
      style={{
        flexDirection: "column",
        padding: 15,
        paddingHorizontal: 20,
        minHeight: 275,
      }}
    >
      {/* Title Bar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginVertical: 10,
          marginBottom: 15,
        }}
      >
        <Text style={styles.headerText}>Daily Activity</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      {/* Data (Text and Graph) */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {/* Left Side (Steps, Calories, Water values) */}
        <View>
          <Text style={styles.dataHeaderText}>Steps</Text>
          <Animated.Text style={[styles.dataLargeText, {}]}>
            {stepNumber}
            <Text style={styles.dataSmallText}> / 16 000</Text>
          </Animated.Text>

          <Text style={styles.dataHeaderText}>Calories</Text>
          <Animated.Text style={styles.dataLargeText}>
            {calorieNumber}
            <Text style={styles.dataSmallText}> / 680 Cal</Text>
          </Animated.Text>

          <Text style={styles.dataHeaderText}>Water</Text>
          <Animated.Text style={styles.dataLargeText}>
            {waterNumber.toString().replace(".", ",")}
            <Text style={styles.dataSmallText}> / 2,5 L</Text>
          </Animated.Text>
        </View>

        {/* Right Side (circle loading thing) */}
        <View>
          <View
            style={{
              marginVertical: 10,
              width: 175,
              height: 175,
              borderRadius: 175 / 2,
              borderColor: "#d3f763",
              borderWidth: 5,
            }}
          />
        </View>
      </View>
    </ContentBubble>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginVertical: 10,
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  seeAll: {
    color: "#d3f763",
    fontSize: 13,
  },

  dataHeaderText: {
    color: "white",
    fontSize: 16,
    opacity: 0.7,
    fontWeight: "300",
    marginTop: 15,
  },
  dataLargeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d3f763",
  },
  dataSmallText: {
    color: "#d3f763",
    fontWeight: "normal",
    fontSize: 16,
  },
});
export default DailyActivity;
