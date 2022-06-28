import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomText from "../../../style/CustomText";
import { IBeach } from "../../interfaces";
import ImgCarousel from "../ImgCarousel/ImgCarousel";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import styles from './BeachModal.styles';

interface IBeachModalProps {
  beach: IBeach;
};

const BeachModal = ({ beach }: IBeachModalProps) => {
  return (
    <View style={styles.mainContainer}>
      <ImgCarousel isCardView={false} images={beach.images as string[]} />
      <View>
        <CustomText >{beach.name}</CustomText>
        <CustomText>{beach.distance} km</CustomText>
      </View>
      <View >
        <CustomText >{beach.location}</CustomText>
        <ScoreDisplay isSingleStar score={beach.score} />
      </View>
    </View>
  );
};

export default BeachModal;