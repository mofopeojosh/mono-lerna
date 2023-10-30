<template>
    <div class="flex items-center gap-2.5 rounded-lg p-3" :class="rootClass">
        <img v-if="hasIcon" :src="iconUrl" :alt="`${type} icon`" width="24" height="24" class="h-6 w-6 shrink-0" />
        <div class="flex grow flex-col gap-0.5">
            <div v-if="$slots.title" class="text-body font-semibold text-text">
                <slot name="title" />
            </div>

            <div v-if="$slots.default" class="text-body text-text">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue-demi';

const errorIconUrl = new URL(`./assets/error-icon.svg`, import.meta.url).href;
const warningIconUrl = new URL(`./assets/warning-icon.svg`, import.meta.url).href;
const infoIconUrl = new URL(`./assets/info-icon.svg`, import.meta.url).href;

type BravadoCalloutProps = {
    type?: 'error' | 'warning' | 'info';
    link?: string;
    hasIcon?: boolean;
};

const props = withDefaults(defineProps<BravadoCalloutProps>(), {
    type: 'info',
    link: '',
    hasIcon: false,
});

const rootClass = computed(() => ({
    'bg-blue-50/20': props.type === 'info',
    'bg-gold-40/20': props.type === 'warning',
    'bg-red-50/20': props.type === 'error',
}));

const iconUrl = computed(() => {
    switch (props.type) {
        case 'error':
            return errorIconUrl;
        case 'warning':
            return warningIconUrl;
        case 'info':
            return infoIconUrl;
        default:
            return infoIconUrl;
    }
});
</script>
