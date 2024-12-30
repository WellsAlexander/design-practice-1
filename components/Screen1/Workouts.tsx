import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ContentBubble from "./ContentBubble";
import WorkoutComponent from "./WorkoutComponent";

const Workouts = () => {
  return (
    <ContentBubble
      style={{
        flexDirection: "column",
        padding: 15,
        minHeight: 130,
        paddingBottom: 100,
      }}
    >
      {/* Title Bar */}
      <View style={[styles.headerContainer, { marginBottom: 20 }]}>
        <Text style={styles.headerText}>Workouts</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      {/* Different Workouts */}
      <WorkoutComponent
        workoutIcon="bicycle"
        workoutDescription="Morning Ride"
        workoutLength="3.55 km"
        workoutDate="Today"
      />

      <WorkoutComponent
        workoutIcon="bicycle"
        workoutDescription="Afternoon Ride"
        workoutLength="2.10 km"
        workoutDate="Today"
      />

      <WorkoutComponent
        workoutIcon="bicycle"
        workoutDescription="Morning Ride"
        workoutLength="3.12 km"
        workoutDate="Yesterday"
      />

      <WorkoutComponent
        workoutIcon="bicycle"
        workoutDescription="Morning Ride"
        workoutLength="3.12 km"
        workoutDate="27/12/2024"
      />
    </ContentBubble>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  seeAll: {
    color: "#d3f763",
    fontSize: 13,
  },
});

export default Workouts;
