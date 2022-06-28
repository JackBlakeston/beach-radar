import { StyleSheet } from "react-native";

import theme from "../../../../style/theme";
import { SCREEN_WIDTH } from "../../../constants";

export default StyleSheet.create({
  imageSmall: {
    height: theme.IMAGE_HEIGHT_CARD,
    width: SCREEN_WIDTH - 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  imageLarge: {
    height: theme.IMAGE_HEIGHT_MODAL,
    width: SCREEN_WIDTH,
  },
});