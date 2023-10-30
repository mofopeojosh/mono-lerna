"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warning = exports.Error = exports.NoIcon = exports.Basic = void 0;
var BravadoCallout_vue_1 = require("./BravadoCallout.vue");
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
var meta = {
    title: 'Forms/BravadoCallout',
    component: BravadoCallout_vue_1.default,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        type: { control: 'select', options: ['warning', 'error', 'info'] },
    },
    render: function (args) { return ({
        components: { BravadoCallout: BravadoCallout_vue_1.default },
        setup: function () { return { args: args }; },
        template: "<bravado-callout v-bind=\"args\">{{args.content}}</bravado-callout>",
    }); },
    args: { content: 'This can be a really long text or a really short one' }, // default value
};
exports.default = meta;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
exports.Basic = {
    args: {
        type: 'info',
        hasIcon: true,
        link: '',
    }
};
exports.NoIcon = {
    args: {
        hasIcon: false,
    },
};
exports.Error = {
    args: {
        type: 'error',
        hasIcon: true,
    },
};
exports.Warning = {
    args: {
        type: 'warning',
        hasIcon: true,
    },
};
