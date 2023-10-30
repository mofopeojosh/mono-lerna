<script setup lang="ts">
import BravadoInput from '@components/common/BravadoInput/BravadoInput.vue';
import BravadoCallout from '@components/common/BravadoCallout/BravadoCallout.vue';
</script>

<template>
  <main class="new overflow-scroll">
    This is an input from the components library<br/>
    This is an input from the components library<br/>
    This is an input from the components library<br/>
    This is an input from the components library<br/>
     <BravadoCallout type="error">
         This is an input from the components library<br/>
     </BravadoCallout>
    <BravadoInput model-value="can you see it"/>
  </main>
</template>

<style lang="scss">
.new {
  @include hide-scrollbar;
  color: var(--color-blue-50);
}
</style>
