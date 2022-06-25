import { Text, View } from "react-native";
import { IBeach } from "../../interfaces"
import ImgCarousel from "../ImgCarousel/ImgCarousel";
import styles from "./BeachCard.styles";

interface IBeachCardProps {
  beach: IBeach;
};

const BeachCard = ({ beach }: IBeachCardProps) => {
  return (
    <View style={styles.mainContainer}>
      <ImgCarousel images={beach.images as string[]} />
      <Text>{beach.name}</Text>
      <Text>{beach.distance}</Text>
      <Text>{beach.location}</Text>
    </View>
  )
}

export default BeachCard;