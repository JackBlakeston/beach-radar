import { useRef, useState } from "react";
import { Image, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import FastImage from 'react-native-fast-image'

import theme from "../../../style/theme";
import { NO_IMG_URL, SCREEN_WIDTH } from "../../constants";
import styles from './ImgCarousel.styles';

interface IImageProps {
  item: string;
  index: number;
};

interface IImgCarouselProps {
  images: string[];
  isCardView?: boolean;
};

const ImgCarousel = ({ images, isCardView = true }: IImgCarouselProps) => {

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef(null);

  if (!images) {
    images = [NO_IMG_URL];
  }

  const renderImage = ({ item, index }: IImageProps) => {
    return (
      <View key={index}>
        <FastImage
          style={
            isCardView ? styles.imageSmall : styles.imageLarge
          }
          source={{ uri: item }}
        />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>

      <Carousel
        layout={'default'}
        layoutCardOffset={0}
        ref={carouselRef}
        data={images}
        renderItem={renderImage}
        sliderWidth={isCardView ? theme.IMAGE_WIDTH_CARD : theme.IMAGE_WIDTH_MODAL}
        itemWidth={isCardView ? theme.IMAGE_WIDTH_CARD : theme.IMAGE_WIDTH_MODAL}
        inactiveSlideShift={0}
        useScrollView={true}
        removeClippedSubviews={false}
        onSnapToItem={(index) => setActiveIndex(index)}
        decelerationRate={5}
      />

      <View style={[
        styles.paginationContainer,
        isCardView ? styles.paginationContainerSmall : styles.paginationContainerLarge
      ]}>
        <Pagination
          dotsLength={images.length}
          activeDotIndex={activeIndex}
          dotStyle={styles.dot}
          dotColor={'white'}
          inactiveDotColor={'#cfcfcf'}
          inactiveDotOpacity={0.8}
          inactiveDotScale={0.7}
        />
      </View>

    </View>
  );
}

export default ImgCarousel;