import { View, Text } from "enmity/components";
import { Clipboard, React } from "enmity/metro/common";
import styles from "./Actions.styles";
import Action from "./Action/Action";
import { reload } from "enmity/api/native";
import commonStyles from "../common.styles";
import { getByProps } from "enmity/metro";
import { ActionProps, ActionsProps, InlineActionsProps, generateCopyActionProps, generateFullStackProps } from "../../def";

const { NativeModules } = getByProps("View", "Text");

const generateCopyActionProps = ({ label, text }: generateCopyActionProps): ActionProps => {
    return {
        label,
        onPress: (label, setLabel) => {
            Clipboard.setString(text);
            setLabel("Copied!");

            setTimeout(() => {
                setLabel(label);
            }, 1200)
        }
    }
}

const generateFullStack = ({ error, debug }: generateFullStackProps) => {
    return `
    ----------------------
      ~ JS Stack Trace ~
    ----------------------
    ${error.stack}
    ----------------------
    ~ End JS Stack Trace ~
    ----------------------
    ----------------------
       ~ React Stack ~
    ----------------------
    ${error.name}
    ${error.componentStack}
    ----------------------
     ~ End React Stack ~
    ----------------------
    ----------------------
        ~ Debug Logs ~
    ----------------------
    ${debug}
    ----------------------
      ~ End Debug Logs ~
    ----------------------
    `.split('\n')
     .filter(line => line != "")
     .map(line => line.trim())
     .join('\n')
};

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
                        generateCopyActionProps({ 
                            label: "Copy JS Trace", 
                            text: error.stack ?? "No JS Stack Trace"
                        }),
                        generateCopyActionProps({
                            label: "Copy React Stack",
                            text: error.componentStack ?? "No Component Stack"
                        })
                    ]}
                />
                <Action 
                    {...generateCopyActionProps({ 
                        label: "Copy Debug Logs", 
                        text: JSON.stringify(debugObject, null, 2) 
                    })} 
                />
                <Action 
                    {...generateCopyActionProps({ 
                        label: "Copy All", 
                        text: generateFullStack({ error, debug: JSON.stringify(debugObject, null, 2)}) 
                    })} 
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
