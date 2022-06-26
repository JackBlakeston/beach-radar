import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { NO_IMG_URL, SCREEN_WIDTH } from "../../constants";
import { storage } from "../../services/firebase";
import CarouselItem from "./CarouselItem/CarouselItem";
import styles from './ImgCarousel.styles';

interface IImgCarouselProps {
  images: string[];
};

const ImgCarousel = ({ images }: IImgCarouselProps) => {

  const [urls, setUrls] = useState<string[]>([NO_IMG_URL]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
          renderItem={CarouselItem}
          sliderWidth={SCREEN_WIDTH - 10}
          itemWidth={SCREEN_WIDTH - 10}
          inactiveSlideShift={0}
          useScrollView={true}
          removeClippedSubviews={false}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      }
      {isLoaded &&
        <View style={styles.paginationContainer}>
          <Pagination
            dotsLength={urls.length}
            activeDotIndex={activeIndex}
            dotStyle={{
              width: 7,
              height: 7,
              borderRadius: 4,
              marginHorizontal: 0,
              borderWidth: 1,
            }}
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