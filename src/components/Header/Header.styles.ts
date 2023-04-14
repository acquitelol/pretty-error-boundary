import { Constants, StyleSheet } from "enmity/metro/common";

const { 
    Fonts: { 
        PRIMARY_NORMAL, 
        PRIMARY_MEDIUM, 
        PRIMARY_BOLD
    }, 
    ThemeColorMap 
} = Constants;

export default StyleSheet.createThemedStyleSheet({
    header: {
        alignItems: "center",
        flexDirection: "row"
    },
    text: {
        fontFamily: PRIMARY_NORMAL
    },
    headerLeftSection: {
        backgroundColor: ThemeColorMap.BACKGROUND_TERTIARY,
  
        width: "52.5%",
        height: 175,
        padding: 10,
        margin: 10,
        borderRadius: 15
    },
    headerLeftSectionTitle: {
        color: ThemeColorMap.HEADER_PRIMARY,
  
        fontSize: 24,
        fontFamily: PRIMARY_BOLD,
        textAlign: "center"
    },
    headerLeftSectionBody: {
        color: ThemeColorMap.HEADER_SECONDARY,
  
        fontSize: 16,
        fontFamily: PRIMARY_MEDIUM,
        textAlign: "center"
    },
    headerRightSection: {
        backgroundColor: ThemeColorMap.BACKGROUND_TERTIARY,
  
        flexGrow: 1,
        height: 175,
        padding: 10,
        marginVertical: 10,
        marginRight: 10,
        borderRadius: 15,
  
        justifyContent: "center",
        alignItems: "center",
    },
    headerRightCircle: {
        backgroundColor: ThemeColorMap.HEADER_PRIMARY,
  
        width: undefined,
        height: "50%",
        aspectRatio: 1/1,
        borderRadius: 999
    },
    headerRightImageLarge: {
        width: undefined,
        height: "50%",
        aspectRatio: 1/1,
  
        position: 'absolute',
        transform: [
            { translateX: "25%" },
            { translateY: "-25%" }
        ]
    },
    headerRightImageSmall: {
        width: undefined,
        height: "40%",
        aspectRatio: 1/1,
  
        position: 'absolute',
        transform: [
            { scaleX: -1 },
            { translateX: "25%" },
            { translateY: "15%" }
        ]
    }
});