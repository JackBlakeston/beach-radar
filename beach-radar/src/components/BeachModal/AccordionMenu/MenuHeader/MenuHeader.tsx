import { View } from "react-native";
import { Entypo } from '@expo/vector-icons';

import CustomText from "../../../../../style/CustomText";
import { BeachViewCategory } from "../../../../constants";
import styles from './MenuHeader.styles';
import theme from "../../../../../style/theme";

interface IMenuHeaderProps {
  title: BeachViewCategory;
  isActive: boolean;
};

const MenuHeader = ({ title, isActive }: IMenuHeaderProps) => {
  return (
    <View style={styles.mainContainer} >
      <CustomText style={styles.title} >{title}</CustomText>
      {
        isActive ?
          <Entypo name="chevron-thin-down" size={theme.ICON_SIZE_MEDIUM} color={theme.COLOR_BLACK} />
          :
          <Entypo name="chevron-thin-right" size={theme.ICON_SIZE_MEDIUM} color={theme.COLOR_BLACK} />
      }
    </View>
  );
};

export default MenuHeader;