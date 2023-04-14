import { View, Text } from "enmity/components";
import { Clipboard, React } from "enmity/metro/common";
import styles from "./Actions.styles";
import Action from "./Action/Action";
import { reload } from "enmity/api/native";
import commonStyles from "../common.styles";
import { getByProps } from "enmity/metro";
import { ActionsProps, InlineActionsProps } from "../../def";

const { NativeModules } = getByProps("View", "Text");

const InlineActions = ({ actions }: InlineActionsProps) => {
    return (
        <View style={{ flexDirection: "row" }}>
            {actions.map((button: any) => <Action style={{ flex: 1/actions.length }} {...button} />)}
        </View>
    );
};

const debugObject = {
    ...window["HermesInternal"]?.getRuntimeProperties(),
    ...NativeModules?.PlatformConstants?.getConstants()
};

export default ({ setNoError, error }: ActionsProps) => {
    return (
        <View style={commonStyles.island}>
            <Text style={styles.header}>Some things you can do while you wait:</Text>
            <View style={styles.buttons}>
                <InlineActions
                    actions={[
                        {
                            label: "Copy JS Trace",
                            onPress: (label, setLabel) => {
                                Clipboard.setString(error.stack);
                                setLabel("Copied!");

                                setTimeout(() => {
                                    setLabel(label);
                                }, 700)
                            }
                        },
                        {
                            label: "Copy React Stack",
                            onPress: (label, setLabel) => {
                                Clipboard.setString(error.componentStack);
                                setLabel("Copied!");
                                
                                setTimeout(() => {
                                    setLabel(label);
                                }, 700)
                            }
                        }
                    ]}
                />
                <Action 
                    label={"Copy Debug Logs"}
                    onPress={() => Clipboard.setString(JSON.stringify(debugObject, null, 2))}
                />
                <Action 
                    label={"Copy All"}
                    onPress={() => Clipboard.setString(error.stack + error.componentStack + JSON.stringify(debugObject, null, 2))}
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
    );
};
