import { Image, View } from "react-native";

import { CAROUSEL_ITEM_WIDTH, SCREEN_WIDTH } from "../../../constants";
import styles from './CarouselItem.styles';

interface ICarouselItemProps {
  item: string;
  index: number;
};

const CarouselItem = ({ item, index }: ICarouselItemProps) => {
  return (
    <View key={index}>
      <Image
        style={
          styles.image
        }
        source={{ uri: item }}
      />
    </View>
  );
}

export default CarouselItem;