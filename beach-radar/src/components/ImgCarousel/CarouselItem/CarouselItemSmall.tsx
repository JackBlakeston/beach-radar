import { Image, View } from "react-native";

import styles from './CarouselItem.styles';

interface ICarouselItemProps {
  item: string;
  index: number;
};

const CarouselItemSmall = ({ item, index }: ICarouselItemProps) => {
  return (
    <View key={index}>
      <Image
        style={
          styles.imageSmall
        }
        source={{ uri: item }}
      />
    </View>
  );
}

export default CarouselItemSmall;