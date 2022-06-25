import { Text, View } from "react-native";
import { IBeach } from "../../interfaces"
import styles from "./styles";

interface IBeachCardProps {
  beach: IBeach;
};

const BeachCard = ({ beach }: IBeachCardProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text>{beach.name}</Text>
      <Text>{beach.distance}</Text>
      <Text>{beach.location}</Text>
    </View>
  )
}

export default BeachCard;