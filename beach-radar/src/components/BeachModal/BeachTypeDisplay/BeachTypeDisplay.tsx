import { View } from "react-native";

import { IBeach } from "../../../interfaces";
import { IconName, Surroundings } from "../../../constants";
import IconWithText from "../../IconWithText/IconWithText";
import getIconName from "../../../utils/getIconName";
import styles from './BeachTypeDisplay.styles';

interface IBeachTypeDisplayProps {
  beach: IBeach;
}

const BeachTypeDisplay = ({ beach }: IBeachTypeDisplayProps) => {

  const surroundingsIconName: IconName = getIconName(Surroundings, Surroundings.URBAN);

  return (
    <View style={styles.mainContainer} >
        <IconWithText
          textStyle={styles.surroundingsText}
          iconName={surroundingsIconName}
          text={beach.surroundings}
        />
        <IconWithText
          iconName={IconName.SIZE}
          text={beach.size}
        />
        <IconWithText
          iconName={IconName.TERRAIN}
          text={beach.terrain}
        />
    </View>
  );
};

export default BeachTypeDisplay;