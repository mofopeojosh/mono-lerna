"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secondary = exports.Primary = void 0;
var BravadoInput_vue_1 = require("./BravadoInput.vue");
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
var meta = {
    title: 'Forms/BravadoInput',
    component: BravadoInput_vue_1.default,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
    },
    args: { modelValue: '' }, // default value
};
exports.default = meta;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
exports.Primary = {
    args: {
        label: 'BravadoInput',
    },
};
exports.Secondary = {
    args: {
        label: 'BravadoInput',
    },
};
