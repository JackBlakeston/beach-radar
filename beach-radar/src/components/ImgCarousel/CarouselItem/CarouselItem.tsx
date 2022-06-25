import { Image, View } from "react-native";
import { CAROUSEL_ITEM_WIDTH, SCREEN_WIDTH } from "../../../constants";

interface ICarouselItemProps {
  item: string;
  index: number;
};

const CarouselItem = ({ item, index }: ICarouselItemProps) => {
  console.log('index: ', index, 'url', item);
  return (
    <View key={index}
    >
      <Image
        style={{
          width: SCREEN_WIDTH - 10,
          height: 200,
        }}
        source={{ uri: item }}
      />
    </View>
  );
}

export default CarouselItem;