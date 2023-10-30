<template>
    <div class="rounded py-3 px-4 border border-border flex flex-col gap-1 w-[500px]">
        <label class="body-semibold">{{label}}</label>
        <input class="border-none focus:outline-none focus:border-none" v-model="value"/>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue-demi';
import type {BravadoInputEmits, BravadoInputProps} from "./BravadoInput.types";

const props = withDefaults(defineProps<BravadoInputProps>(), {
    label: '',
    type: 'text',
    size: 'md',
    name: 'bravado-input',
});
const emit = defineEmits<BravadoInputEmits>();

const value = computed({
    get: () => props.modelValue,
    set: (value) => {
        const numberValue = parseFloat(`${value}`);
        emit('update:modelValue', props.type === 'number' && !isNaN(numberValue) ? numberValue : value);
    },
});

</script>
