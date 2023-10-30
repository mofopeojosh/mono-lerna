export type TextInputEvents = {
    keydown: (event: KeyboardEvent) => void;
    // input?: (event: KeyboardEventWithComposing) => void;
};

export type BravadoInputProps = {
    label?: number | string;
    type?: 'number' | 'text' | 'file' | 'password' | 'email';
    modelValue: string | number;
    invalid?: boolean;
    size?: 'sm' | 'md';
};
export type BravadoInputEmits = {
    (event: 'update:modelValue', data: number | string): void;
    (event: 'update:files', data: FileList): void;
};
