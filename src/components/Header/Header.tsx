import { View, Image, Text } from "enmity/components"
import { React } from "enmity/metro/common"
import styles from "./Header.styles"
import commonStyles from "../common.styles"

export default () => {
    return <View style={[commonStyles.island, styles.header]}>
        <View style={styles.headerLeftSection}>
        <Text style={styles.headerLeftSectionTitle}>
            Discord has crashed.
        </Text>
        <Text style={styles.headerLeftSectionBody}>
            Don't worry! We'll fix this soon. Relax and take Kemonomimi-chan in the meantime.
        </Text>
        </View>
        <View style={styles.headerRightSection}>
        <View style={styles.headerRightCircle} />
        {[styles.headerRightImageLarge, styles.headerRightImageSmall].map(style => (
            <Image
                style={style}
                source={{ uri: "https://cdn.discordapp.com/emojis/1094996543662207026.gif?size=2048&quality=lossless" }} 
            />
        ))}
        </View>
    </View>
}