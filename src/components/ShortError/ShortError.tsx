import { View, Text } from "enmity/components";
import { React } from "enmity/metro/common";
import styles from "./ShortError.styles";
import commonStyles from "../common.styles";
import { ShortErrorProps } from "../../def";

export default ({ error, engine }: ShortErrorProps) => {
    return (
        <View style={commonStyles.island}>
            <Text style={styles.header}>Here's a short outline of what happened:</Text>
            <View style={styles.container}>
                <Text style={styles.body}>{error.toString()}</Text>
            </View>
            <View style={[styles.container, { marginTop: 0 }]}>
                <Text style={styles.body}>js engine: {engine}</Text>
            </View>
        </View>
    );
};
