import { View } from "react-native";
import CustomText from "../../../style/CustomText";
import { IBeach } from "../../interfaces"
import ImgCarousel from "../ImgCarousel/ImgCarousel";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import styles from "./BeachCard.styles";

interface IBeachCardProps {
  beach: IBeach;
};

const BeachCard = ({ beach }: IBeachCardProps) => {
  return (
    <View style={styles.mainContainer}>
      <ImgCarousel images={beach.images as string[]} />
      <View style={[styles.beachInfoRow, styles.beachInfoTopRow]}>
        <CustomText style={styles.beachName}>{beach.name}</CustomText>
        <CustomText>{beach.distance} km</CustomText>
      </View>
      <View style={[styles.beachInfoRow, styles.beachInfoBotRow]}>
        <CustomText style={styles.location}>{beach.location}</CustomText>
        <ScoreDisplay isSingleStar score={beach.score} />
      </View>
    </View>
  )
}

export default BeachCard;