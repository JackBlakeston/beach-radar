import { GestureResponderEvent } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import theme from '../../../../style/theme';
import { IBeach } from "../../../interfaces";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import styles from './DistanceButton.styles';

interface IDistanceButtonProps {
  beach: IBeach;
};

const DistanceButton = ({ beach }: IDistanceButtonProps) => {

  const handlePress = (event: GestureResponderEvent) => {

  };

  return (
    <PrimaryButton
      text={`${beach.distance} km`}
      onPress={handlePress}
      icon={<Ionicons name='location-outline' size={theme.ICON_SIZE_SMALL} color={theme.COLOR_WHITE} />}
      style={styles.buttonStyle}
      textStyle={styles.buttonTextStyle}
    />
  );
};

export default DistanceButton;