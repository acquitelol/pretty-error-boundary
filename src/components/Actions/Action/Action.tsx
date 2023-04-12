import { TouchableOpacity, Text } from "enmity/components";
import { React } from "enmity/metro/common";
import styles from "./Action.styles";

export default ({ label, onPress, style }: { label: string, onPress: () => any, style?: any[] | { [key: string]: any } }) => {
    return <TouchableOpacity 
        style={[
            styles.container,
            style
        ]}
        onPress={onPress}
    >
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
}