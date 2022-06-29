import { StyleSheet } from "react-native";

import theme from "../../../../../style/theme";

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 7
  },
  title: {
    fontSize: theme.FONT_SIZE_HUGE,
    paddingBottom: 4,
  }
});