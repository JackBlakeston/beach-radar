import { StyleSheet } from "react-native";
import fonts from "../../../style/fonts";

import theme from "../../../style/theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  beachInfoRow: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  beachInfoTopRow: {
    paddingTop: 10,
  },
  beachInfoBotRow: {
    paddingTop: 12,
    paddingBottom: 10,
  },
  beachName: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: fonts.BOLD
  },
  location: {
    fontFamily: fonts.LIGHT,
  }
});