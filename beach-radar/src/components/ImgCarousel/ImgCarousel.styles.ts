import { StyleSheet } from "react-native";

import theme from "../../../style/theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
  },
  paginationContainer: {
    position: "absolute",
    top: 150,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  }
});