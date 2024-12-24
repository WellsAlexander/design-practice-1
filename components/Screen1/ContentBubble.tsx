import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface ContentBubbleProps {
  children: React.ReactNode; // Content inside the bubble
  minHeight?: number; // Optional minimum height for the bubble
  style?: StyleProp<ViewStyle>; // Additional styles to merge with default styles
}

const ContentBubble: React.FC<ContentBubbleProps> = ({
  children,
  minHeight = 120, // Default min height
  style,
}) => {
  return <View style={[styles.bubble, { minHeight }, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: "#2d2d36",
    borderRadius: 35,
    padding: 15,
    paddingLeft: 20,
    marginHorizontal: 3,
    marginVertical: 2, // Up and down
  },
});

export default ContentBubble;
