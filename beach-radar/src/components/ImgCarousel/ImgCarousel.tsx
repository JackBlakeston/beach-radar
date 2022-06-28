import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { NO_IMG_URL, SCREEN_WIDTH } from "../../constants";
import { storage } from "../../services/firebase";
import CarouselItemLarge from "./CarouselItem/CarouselItemLarge";
import CarouselItemSmall from "./CarouselItem/CarouselItemSmall";
import styles from './ImgCarousel.styles';

interface IImgCarouselProps {
  images: string[];
  isCardView?: boolean;
};

const ImgCarousel = ({ images, isCardView = true }: IImgCarouselProps) => {

  const [urls, setUrls] = useState<string[]>([NO_IMG_URL]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (images) {
      // TODO more optimal way to do this
      // maybe we can save the correct urls when uploading beaches, instead of paths, and skip this
      const responseUrls: string[] = [];
      images.forEach((imagePath) => {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef).then(response => {
          responseUrls.push(response);
          setUrls(responseUrls);
          if (images.length === responseUrls.length) {
            setIsLoaded(true);
          }
        });
      });
    } else {
      setIsLoaded(true);
    }
  }, []);

  const carouselRef = useRef(null);
  return (
    <View style={styles.mainContainer}>
      {isLoaded &&
        <Carousel
          layout={'default'}
          layoutCardOffset={0}
          ref={carouselRef}
          data={urls}
          renderItem={isCardView ? CarouselItemSmall : CarouselItemLarge}
          sliderWidth={isCardView ? SCREEN_WIDTH - 20 : SCREEN_WIDTH}
          itemWidth={isCardView ? SCREEN_WIDTH - 20 : SCREEN_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
          removeClippedSubviews={false}
          onSnapToItem={(index) => setActiveIndex(index)}
          decelerationRate={5}
        />
      }
      {isLoaded &&
        <View style={[
          styles.paginationContainer,
          isCardView ? styles.paginationContainerSmall : styles.paginationContainerLarge
        ]}>
          <Pagination
            dotsLength={urls.length}
            activeDotIndex={activeIndex}
            dotStyle={styles.dot}
            dotColor={'white'}
            inactiveDotColor={'#cfcfcf'}
            inactiveDotOpacity={0.8}
            inactiveDotScale={0.7}
          />
        </View>
      }
    </View>
  );
}

export default ImgCarousel;