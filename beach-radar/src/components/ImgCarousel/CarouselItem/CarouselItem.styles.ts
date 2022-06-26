import { StyleSheet } from "react-native";

import theme from "../../../../style/theme";
import { SCREEN_WIDTH } from "../../../constants";

export default StyleSheet.create({
  image: {
    width: SCREEN_WIDTH - 10,
    height: theme.CARD_IMAGE_HEIGHT,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  }
});