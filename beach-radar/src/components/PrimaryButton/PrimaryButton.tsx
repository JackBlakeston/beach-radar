import { ButtonProps, GestureResponderEvent, Pressable } from "react-native";
import { StyleProps } from "react-native-reanimated";

import CustomText from "../../../style/CustomText";
import theme from "../../../style/theme";
import styles from './PrimaryButton.styles';

interface IPrimaryButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  style?: StyleProps;
};

const PrimaryButton = ({ onPress, style, text }: IPrimaryButtonProps) => {
  return (
    <Pressable
      style={[styles.mainContainer, style]}
      onPress={onPress}
    >
      <CustomText style={styles.text}>{text}</CustomText>
    </Pressable>
  );
};

export default PrimaryButton;