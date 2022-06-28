import { View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import CustomText from "../../../style/CustomText";
import theme from "../../../style/theme";
import styles from './ScoreDisplay.styles';
import { displayFullStarRating } from './utils';

interface IScoreDisplayProps {
  score: number;
  isSingleStar?: boolean;
};

const ScoreDisplay = ({ score, isSingleStar = false }: IScoreDisplayProps) => {
  return (
    <View style={styles.mainContainer}>
      <CustomText style={styles.text}>{score}</CustomText>
      {
        isSingleStar ?
        <FontAwesome name='star' size={theme.ICON_SIZE_SMALL} color={theme.COLOR_PRIMARY} />
        :
        displayFullStarRating(score)
      }
    </View>
  );
};

export default ScoreDisplay;