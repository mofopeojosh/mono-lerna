import type { Meta, StoryObj } from '@storybook/vue3';

import BravadoCallout from './BravadoCallout.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Forms/BravadoCallout',
    component: BravadoCallout,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        type: { control: 'select', options: ['warning', 'error', 'info'] },
    },
    render: (args) => ({
        components: { BravadoCallout },
        setup() { return { args } },
        template: `<bravado-callout v-bind="args">{{args.content}}</bravado-callout>`,
    }),
    args: { content: 'This can be a really long text or a really short one' }, // default value
} satisfies Meta<typeof BravadoCallout>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const Basic: Story = {
    args: {
        type: 'info',
        hasIcon: true,
        link: '',
    }
}

export const NoIcon: Story = {
    args: {
        hasIcon: false,
    },
};

export const Error: Story = {
    args: {
        type: 'error',
        hasIcon: true,
    },
};

export const Warning: Story = {
    args: {
        type: 'warning',
        hasIcon: true,
    },
};
