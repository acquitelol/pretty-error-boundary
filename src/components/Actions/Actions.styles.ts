import { Constants, StyleSheet } from "enmity/metro/common";

const { 
    Fonts: { 
        PRIMARY_SEMIBOLD,
        CODE_SEMIBOLD
    }, 
    ThemeColorMap 
} = Constants;

export default StyleSheet.createThemedStyleSheet({
    header: {
        color: ThemeColorMap.HEADER_PRIMARY,
  
        marginTop: 10,
        marginLeft: 15,
        fontSize: 20,
        fontFamily: PRIMARY_SEMIBOLD
    },
    buttons: {
        backgroundColor: ThemeColorMap.BACKGROUND_TERTIARY,
  
        margin: 10,
        padding: 10,
        borderRadius: 15,
    },
    errorContainer: {
        backgroundColor: ThemeColorMap.BACKGROUND_TERTIARY,
  
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    errorBody: {
        color: ThemeColorMap.HEADER_SECONDARY,
        fontFamily: CODE_SEMIBOLD,
    },
})