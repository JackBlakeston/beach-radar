import { StyleSheet } from "react-native";

import theme from "../../style/theme";

export default StyleSheet.create({
  tabBar: {
    padding: 8,
    height: 60,
    backgroundColor: theme.COLOR_PRIMARY,
  },
  tabBarLabel: {
    fontFamily: 'JosefinSans_400Regular',
    fontSize: theme.FONT_SIZE_SMALL,
    paddingBottom: 8,
  },
});