import { View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import CustomText from "../../../style/CustomText";
import theme from "../../../style/theme";
import styles from './ScoreDisplay.styles';
import { displayFullStarRating } from './utils';

interface IScoreDisplayProps {
  score: number;
  isCardView?: boolean;
};

const ScoreDisplay = ({ score, isCardView = false }: IScoreDisplayProps) => {
  return (
    <View style={styles.mainContainer}>
      <CustomText style={styles.text}>{score}</CustomText>
      {
        isCardView ?
        <FontAwesome name='star' size={theme.ICON_SIZE_SMALL} color={theme.COLOR_PRIMARY} />
        :
        displayFullStarRating(score)
      }
    </View>
  );
};

export default ScoreDisplay;