import { Image, View } from "react-native";

import styles from './CarouselItem.styles';

interface ICarouselItemProps {
  item: string;
  index: number;
};

const CarouselItemLarge = ({ item, index }: ICarouselItemProps) => {
  return (
    <View key={index}>
      <Image
        style={
          styles.imageLarge
        }
        source={{ uri: item }}
      />
    </View>
  );
}

export default CarouselItemLarge;