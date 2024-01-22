<template>
  <main>
    <TableButtons />
    <DataStructuresGrid />
  </main>
</template>

<script setup>
import DataStructuresGrid from './components/DataStructuresGrid.vue';
import TableButtons from './components/TableButtons.vue';

import { onMounted } from 'vue';
import useJava from '@/composables/java';

onMounted(() => {
  const { testJava } = useJava();
  console.log( testJava('int[] arr;') );
});

</script>

<style lang="scss" scoped>

</style>
