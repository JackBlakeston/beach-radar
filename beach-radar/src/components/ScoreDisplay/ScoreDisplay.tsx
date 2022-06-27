import { View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomText from "../../../style/CustomText";
import theme from "../../../style/theme";
import styles from './ScoreDisplay.styles';

interface IScoreDisplayProps {
  score: number;
  isSingleStar: boolean;
};

const ScoreDisplay = ({ score, isSingleStar }: IScoreDisplayProps) => {
  return (
    <View style={styles.mainContainer}>
      <CustomText>{score}</CustomText>
      {
        isSingleStar ?
        <Ionicons style={styles.singleStar} name='star' size={theme.ICON_SIZE_SMALL} color={theme.COLOR_PRIMARY} />
        :
        <CustomText>TODO LOGIC ON MULTISTARS</CustomText> // TODO
      }
    </View>
  );
};

export default ScoreDisplay;