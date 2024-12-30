import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

interface WorkoutComponentProps {
  workoutIcon: keyof typeof FontAwesome.glyphMap;
  workoutDescription: string;
  workoutLength: string;
  workoutDate: string;
}

const WorkoutComponent: React.FC<WorkoutComponentProps> = ({
  workoutIcon,
  workoutDescription,
  workoutLength,
  workoutDate,
}) => {
  return (
    <View style={styles.container}>
      {/* Icon inside circle */}
      <View style={styles.iconCircle}>
        <FontAwesome name={workoutIcon} size={20} color="#d3f763" />
      </View>

      {/* Description and Length */}
      <View style={styles.description}>
        <Text style={{ color: "gray", fontSize: 16, paddingBottom: 5 }}>
          {workoutDescription}
        </Text>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
          {workoutLength}
        </Text>
      </View>

      {/* Date */}
      <Text
        style={{
          color: "gray",
          alignSelf: "flex-end",
          paddingRight: 5,
          paddingBottom: 3,
        }}
      >
        {workoutDate}
      </Text>
      <FontAwesome
        name="angle-right"
        size={20}
        color="gray"
        style={{ alignSelf: "flex-end", paddingRight: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#24242A",
    padding: 12,
    borderRadius: 40,
    marginVertical: 2,
  },
  description: {
    flexGrow: 1,
    paddingHorizontal: 15,
    justifyContent: "flex-end",
  },
  iconCircle: {
    height: 40,
    width: 40,
    backgroundColor: "#0D0D0A",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WorkoutComponent;
