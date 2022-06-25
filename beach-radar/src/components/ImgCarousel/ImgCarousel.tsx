import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { Dimensions, Image, SafeAreaView, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { NO_IMG_URL, SCREEN_WIDTH } from "../../constants";
import { storage } from "../../services/firebase";
import CarouselItem from "./CarouselItem/CarouselItem";

interface IImgCarouselProps {
  images: string[];
};

const ImgCarousel = ({ images }: IImgCarouselProps) => {

  const [urls, setUrls] = useState<string[]>([NO_IMG_URL]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images) {
      // TODO more optimal way to do this
      // maybe we can save the correct urls when uploading beaches, instead of paths, and skip this
      const responseUrls: string[] = [];
      images.forEach(imagePath => {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef).then(response => {
          responseUrls.push(response);
          setUrls(responseUrls);
        });
      });
    }
    setLoaded(true);
  }, []);

  const carouselRef = useRef(null);

  return (
    <>
    {loaded &&
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
      <Carousel
        layout={"default"}
        ref={carouselRef}
        data={urls}
        renderItem={CarouselItem}
        sliderWidth={SCREEN_WIDTH - 10}
        itemWidth={SCREEN_WIDTH - 10}
        inactiveSlideShift={0}
        useScrollView={true}
        removeClippedSubviews={false}
      />
    </View>}
    </>
  );
}

export default ImgCarousel;