import type { Meta, StoryObj } from '@storybook/vue3';

import BravadoInput from './BravadoInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Forms/BravadoInput',
    component: BravadoInput,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
    },
    args: { modelValue: '' }, // default value
} satisfies Meta<typeof BravadoInput>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    args: {
        label: 'BravadoInput',
    },
};

export const Secondary: Story = {
    args: {
        label: 'BravadoInput',
    },
};
