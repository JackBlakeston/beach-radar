import { View } from "react-native";
import { StyleProps } from "react-native-reanimated";

import CustomText from "../../../style/CustomText";
import theme from "../../../style/theme";
import { IconName } from "../../constants";
import RenderIcon from "../RenderIcon/RenderIcon";
import styles from './IconWithText.styles';

interface IIconWithTextProps {
  text: string;
  iconName: IconName;
  iconColor?: string; // TODO should we replace colors with enums?
  iconSize?: number;
  containerStyle?: StyleProps;
  textStyle?: StyleProps;
};

const IconWithText = ({
  text,
  iconName,
  iconColor = theme.COLOR_BLACK,
  iconSize = theme.ICON_SIZE_MEDIUM,
  containerStyle,
  textStyle,
}: IIconWithTextProps) => {

  return (
    <View
      style={[
        styles.mainContainer,
        containerStyle
      ]}
    >
      <RenderIcon iconName={iconName} iconColor={iconColor} iconSize={iconSize} />
      <CustomText style={[styles.text, textStyle]} >{text}</CustomText>
    </View>
  );
};

export default IconWithText;