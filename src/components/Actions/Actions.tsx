import { View, Text } from "enmity/components"
import { Clipboard, React } from "enmity/metro/common"
import styles from "./Actions.styles"
import Action from "./Action/Action"
import { reload } from "enmity/api/native"
import commonStyles from "../common.styles"
import { getByProps } from "enmity/metro"

const ReactNative = getByProps("View", "Text")

const InlineButtons = ({ buttons }) => {
    return <View style={{ flexDirection: "row" }}>
        {buttons.map((button: any) => <Action style={{ flex: 1/buttons.length }} {...button} />)}
    </View>
}

export default ({ setNoError, error }) => {
    const debugObject = {
        ...window["HermesInternal"]?.getRuntimeProperties(),
        ...ReactNative?.NativeModules?.PlatformConstants?.getConstants()
    }

    return <View style={commonStyles.island}>
        <Text style={styles.header}>Some things you can do while you wait:</Text>
        <View style={styles.buttons}>
            <InlineButtons 
                buttons={[
                    {
                        label: "Copy JS Trace",
                        onPress: () => Clipboard.setString(error.stack)
                    },
                    {
                        label: "Copy React Stack",
                        onPress: () => Clipboard.setString(error.componentStack)
                    }
                ]}
            />
            <Action 
                label={"Copy Debug Logs"}
                onPress={() => Clipboard.setString(JSON.stringify(debugObject, null, 2))}
            />
            <Action 
                label={"Copy All"}
                onPress={() => Clipboard.setString(
                    error.stack + error.componentStack + JSON.stringify(debugObject, null, 2)
                )}
            />
            <Action 
                label={"Retry Render"}
                onPress={setNoError}
            />
            <Action 
                label={"Restart Discord"}
                onPress={reload}
            />
        </View>
    </View>
}