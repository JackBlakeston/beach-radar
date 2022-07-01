import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { IBeach } from "../../interfaces";
import BeachMainInfoDisplay from "../BeachMainInfoDisplay/BeachMainInfoDisplay";
import ImgCarousel from "../ImgCarousel/ImgCarousel";
import styles from './BeachModal.styles';
import AccordionMenu from "./AccordionMenu/AccordionMenu";
import BeachTypeDisplay from "./BeachTypeDisplay/BeachTypeDisplay";

interface IBeachModalProps {
  beach: IBeach;
};

const BeachModal = ({ beach }: IBeachModalProps) => {

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <ImgCarousel isCardView={false} images={beach.images as string[]} />
        <BeachMainInfoDisplay beach={beach} />
        <BeachTypeDisplay beach={beach} />
        <AccordionMenu beach={beach} />
      </View>
    </ScrollView>
  );
};

export default BeachModal;