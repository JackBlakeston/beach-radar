import { StyleSheet } from "react-native";
import fonts from "../../../style/fonts";

import theme from "../../../style/theme";

export default StyleSheet.create({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingBottom: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  beachInfoContainer: {
    alignItems: 'center',
    width: '100%',
  },
  beachInfoRow: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  beachInfoTopRow: {
    paddingTop: 10,
    paddingBottom: 2,
  },
  beachInfoBotRow: {
    paddingTop: 2,
    paddingBottom: 10,
  },
  beachName: {
    fontSize: 18,
    fontFamily: fonts.BOLD
  },
  location: {
    fontFamily: fonts.LIGHT,
  }
});