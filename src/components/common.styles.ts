import { Constants, StyleSheet } from "enmity/metro/common";

const { ThemeColorMap } = Constants;

export default StyleSheet.createThemedStyleSheet({
    island: {
        backgroundColor: ThemeColorMap.BACKGROUND_SECONDARY,
  
        width: "95%",
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 15,
    }
})