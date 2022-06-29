import { View } from "react-native";

import CustomText from "../../../style/CustomText";
import theme from "../../../style/theme";
import { IBeach } from "../../interfaces";
import DistanceButton from "../BeachModal/DistanceButton/DistanceButton";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import styles from './BeachMainInfoDisplay.styles';

interface IBeachMainInfoDisplayProps {
  beach: IBeach;
  isCardView?: boolean;
};

const BeachMainInfoDisplay = ({ beach, isCardView = false }: IBeachMainInfoDisplayProps) => {
  return (
    <>
      <View style={[styles.textRow, styles.textTopRow]}>
        <CustomText
          style={[
            styles.beachName,
            {
              fontSize: isCardView ? theme.FONT_SIZE_MEDIUM_PLUS : theme.FONT_SIZE_HUGE
            }
          ]}
        >
          {beach.name}
        </CustomText>
        {isCardView ? <CustomText>{beach.distance} km</CustomText> : <DistanceButton beach={beach} />}
      </View>
      <View
      style={[
        styles.textRow,
        styles.textBotRow,
        {
          paddingTop: isCardView ? 4 : 12,
        }
      ]}
      >
        <CustomText style={styles.location}>{beach.location}</CustomText>
        <ScoreDisplay isCardView={isCardView} score={beach.score} />
      </View>
    </>
  );
};

export default BeachMainInfoDisplay;