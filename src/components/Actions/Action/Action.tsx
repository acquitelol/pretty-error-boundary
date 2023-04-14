import { TouchableOpacity, Text } from "enmity/components";
import { React } from "enmity/metro/common";
import styles from "./Action.styles";
import { ActionProps } from "../../../def";

export default ({ label, onPress, style }: ActionProps) => {
    const [statefulLabel, setStatefulLabel] = React.useState(label);

    return (
        <TouchableOpacity 
            style={[
                styles.container,
                style
            ]}
            onPress={() => onPress(statefulLabel, setStatefulLabel)}
        >
            <Text style={styles.text}>{statefulLabel}</Text>
        </TouchableOpacity>
    );
};
