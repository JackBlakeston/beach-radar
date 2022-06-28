import { Text, StyleSheet, TextStyle, StyleProp } from "react-native";
import fonts from "./fonts";

import theme from "./theme";

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: fonts.REGULAR,
    fontSize: theme.FONT_SIZE_MEDIUM
  }
});

interface ICustomTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const CustomText = ({ children, style }: ICustomTextProps) => {
  return (
    <Text
      style={[
        styles.defaultText,
        style,
      ]}
    >
      {children}
    </Text>
  )
}

export default CustomText;