import { StyleSheet } from "react-native";
import fonts from "../../../style/fonts";

import theme from "../../../style/theme";

export default StyleSheet.create({
  textRow: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTopRow: {
    paddingTop: 10,
  },
  textBotRow: {
    paddingBottom: 10,
  },
  beachName: {
    fontFamily: fonts.BOLD
  },
  location: {
    fontFamily: fonts.LIGHT,
  }
});