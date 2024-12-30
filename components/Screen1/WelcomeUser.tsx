import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const WelcomeUser = () => {
  return (
    <View style={[styles.section, styles.welcomeUser]}>
      <View>
        <View style={styles.userImage}>
          <FontAwesome name="user" size={50} color="#18181f" style={{}} />
        </View>
        <View style={styles.notificationCircle} />
      </View>
      <View style={styles.welcomeText}>
        <Text style={[styles.text, styles.helloUserText]}>Hello Alex!</Text>
        <Text style={[styles.text, styles.userMessage]}>
          Let's start your day
        </Text>
      </View>
      <View style={styles.welcomeTrophyIcon}>
        <FontAwesome
          name="trophy"
          size={26}
          color="#d5ff5f"
          style={{ margin: 5 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
  section: {
    borderRadius: 40,
    padding: 15, // Inside padding
    paddingLeft: 20,
    marginHorizontal: 3,
    marginBottom: 2, // Up and down
    minHeight: 80,
  },

  welcomeUser: {
    backgroundColor: "#1A1B20",
    paddingTop: 70,
    marginHorizontal: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userImage: {
    justifyContent: "center",
    alignItems: "center",
    height: 65,
    width: 65,
    borderRadius: 50,
    backgroundColor: "#2d2d36",
    marginRight: 10,
  },
  notificationCircle: {
    position: "absolute",
    bottom: 0,
    right: 15,
    height: 15,
    width: 15,
    borderRadius: 50,
    backgroundColor: "#d3f763",
  },
  welcomeText: {
    flex: 1,
    flexShrink: 1,
    paddingLeft: 15,
  },
  helloUserText: {
    fontSize: 22,
  },
  userMessage: {
    color: "#b3b3b3",
    fontSize: 16,
  },
  welcomeTrophyIcon: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#2c2c35",
  },
});

export default WelcomeUser;
