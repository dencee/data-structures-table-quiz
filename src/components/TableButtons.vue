<template>
  <div class="btn-container">
    <TableButton @btn-clicked="resetAnswers" title="reset" />
    <TableButton @btn-clicked="checkAnswers" title="check" />
    <TableButton @btn-clicked="showAnswers" title="answers" />
  </div>
</template>

<script setup>
import TableButton from './TableButton.vue';
import { useTableDataStore } from '@/stores/tableData';

const tableDataStore = useTableDataStore();

const checkAnswers = () => tableDataStore.checkCells();
const resetAnswers = () => tableDataStore.resetCells();
const showAnswers = () => tableDataStore.showAnswers();

</script>

<style lang="scss" scoped>
.btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>