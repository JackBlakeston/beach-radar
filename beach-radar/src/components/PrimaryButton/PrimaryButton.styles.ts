import { StyleSheet } from "react-native";

import theme from "../../../style/theme";

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 6,
    elevation: 3,

  },
  text: {
    color: 'white',
  }
});