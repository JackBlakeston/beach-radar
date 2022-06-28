import { GestureResponderEvent, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import CustomText from "../../../style/CustomText";
import theme from "../../../style/theme";
import { IBeach } from "../../interfaces";
import ImgCarousel from "../ImgCarousel/ImgCarousel";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import styles from './BeachModal.styles';
import DistanceButton from "./DistanceButton/DistanceButton";

interface IBeachModalProps {
  beach: IBeach;
};

const BeachModal = ({ beach }: IBeachModalProps) => {



  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <ImgCarousel isCardView={false} images={beach.images as string[]} />
        <View style={[styles.beachInfoRow, styles.beachInfoTopRow]}>
          <CustomText style={styles.beachName}>{beach.name}</CustomText>
          <DistanceButton beach={beach} />
        </View>
        <View style={[styles.beachInfoRow, styles.beachInfoBotRow]}>
          <CustomText style={styles.location}>{beach.location}</CustomText>
          <ScoreDisplay score={beach.score} />
        </View>
      </View>
    </ScrollView>
  );
};

export default BeachModal;