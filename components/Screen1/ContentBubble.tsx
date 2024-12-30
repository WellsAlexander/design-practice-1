import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface ContentBubbleProps {
  children: React.ReactNode; // Content inside the bubble
  style?: StyleProp<ViewStyle>; // Additional styles to merge with default styles
}

const ContentBubble: React.FC<ContentBubbleProps> = ({ children, style }) => {
  return <View style={[styles.bubble, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: "#303139",
    borderRadius: 35,
    marginHorizontal: 3,
    marginVertical: 2, // Up and down
    padding: 15, // Add padding for inner spacing
  },
});

export default ContentBubble;
