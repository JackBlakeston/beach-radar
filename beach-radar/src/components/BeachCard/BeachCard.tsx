import { GestureResponderEvent, Pressable, View } from "react-native";

import CustomText from "../../../style/CustomText";
import { IBeach } from "../../interfaces"
import BeachMainInfoDisplay from "../BeachMainInfoDisplay/BeachMainInfoDisplay";
import ImgCarousel from "../ImgCarousel/ImgCarousel";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import styles from "./BeachCard.styles";

interface IBeachCardProps {
  beach: IBeach;
  onPress: (event: GestureResponderEvent, beach: IBeach) => void
};

const BeachCard = ({ beach, onPress }: IBeachCardProps) => {
  return (
    <View style={styles.mainContainer}>
      <ImgCarousel images={beach.images as string[]} />
      <Pressable
        onPress={(event: GestureResponderEvent) => {
          onPress(event, beach);
        }}
        style={styles.beachInfoContainer}
        hitSlop={{ top: 180, bottom: 10 }}
      >
        <BeachMainInfoDisplay beach={beach} isCardView />
      </Pressable>
    </View>
  )
}

export default BeachCard;