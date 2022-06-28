import { GestureResponderEvent, Pressable } from "react-native";
import { StyleProps } from "react-native-reanimated";

import CustomText from "../../../style/CustomText";
import theme from "../../../style/theme";
import styles from './PrimaryButton.styles';

interface IPrimaryButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  style?: StyleProps;
  textStyle?: StyleProps;
  icon?: JSX.Element;
};

const PrimaryButton = ({ onPress, style, text, textStyle, icon }: IPrimaryButtonProps) => {
  return (
    <Pressable
      style={
        ({ pressed }) => [
          // For ios, since they don't have ripple effect
          {
            backgroundColor: pressed
              ? theme.COLOR_RIPPLE
              : theme.COLOR_PRIMARY
          },
          styles.mainContainer,
          style
        ]
      }
      onPress={onPress}
      android_ripple={{
        color: theme.COLOR_RIPPLE,
      }}
    >
      {icon}
      <CustomText style={[styles.text, textStyle]}>{text}</CustomText>
    </Pressable>
  );
};

export default PrimaryButton;