import { Constants, StyleSheet } from "enmity/metro/common";

const { 
    Fonts: { 
        PRIMARY_BOLD 
    }, 
    ThemeColorMap,
    Colors 
} = Constants;

export default StyleSheet.createThemedStyleSheet({
    container: {
        backgroundColor: Colors.BRAND_500,
  
        height: 40,
        borderRadius: 5,
        margin: 5,
  
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
    },
    text: {
        color: ThemeColorMap.TEXT_NORMAL,
        fontFamily: PRIMARY_BOLD,
  
        paddingLeft : 10,
        paddingRight : 10,
        letterSpacing: 0.25,
        fontSize: 16,
  
        textAlign: 'center'
    },
});
