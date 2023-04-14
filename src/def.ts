export type ReactError = Error & { componentStack: any };

export interface ShortErrorProps {
    error: ReactError;
    engine: "hermes" | "jsc" | string;
};

export interface ActionProps {
    label: string;
    onPress: (label: string, setLabel: (label: string | ((previousLabel: string) => string)) => any) => any;
    style?: any[] | { [key: string]: any }
};

export interface ActionsProps {
    setNoError: () => any;
    error: ReactError;
};

export interface InlineActionsProps {
    actions: Array<ActionProps>;
};
