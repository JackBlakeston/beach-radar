import { StyleSheet } from "react-native";

import theme from "../../../style/theme";
import { SCREEN_WIDTH } from "../../constants";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
  },
  paginationContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationContainerSmall: {
    top: 135,
  },
  paginationContainerLarge: {
    top: 185,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginHorizontal: 0,
    borderWidth: 1,
  },
  imageSmall: {
    height: theme.IMAGE_HEIGHT_CARD,
    width: theme.IMAGE_WIDTH_CARD,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  imageLarge: {
    height: theme.IMAGE_HEIGHT_MODAL,
    width: theme.IMAGE_WIDTH_MODAL,
  },
});