<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th v-for="eachDataStructure in formattedDataStructures" :key="eachDataStructure">{{ eachDataStructure }}</th>
      </tr>
    </thead>
    <tbody>

      <tr v-for="(eachOperation, i) in formattedOperations" :key="eachOperation">
        <td>{{ eachOperation }}</td>
        <td
          v-for="(cell, k) in cellData[i]"
          :key="`${i}${k}`"
          :id="`${i}${k}`"
          :title="cell.correctAnswer"
        >
          <input 
            v-model="cell.input"
            :style="{ 'background-color': cell.bg }"
            :disabled="cell.bg === 'black'"
            type="text" 
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useTableDataStore } from '@/stores/tableData';

const tableDataStore = useTableDataStore();
const { formattedDataStructures, formattedOperations } = tableDataStore;
const { cellData } = storeToRefs(tableDataStore);


</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;

  th, td {
    border: 1px solid var(--border);
    text-align: center;
    padding: 0;
    height: 100%;
    margin: 0;
    color: var(--heading);
    background-color: var(--heading-background);

    input[type="text"] {
      width: 100%;
      height: 100%;
      min-height: 2rem;
      padding: 5px;
      border: 0;
      border-radius: 0;
      font-family: 'Consolas', 'Courier New', Courier, monospace;
      background-color: var(--cell-background);
      color: var(--text);
    }

    textarea {
      resize: none;
      min-height: 4rem;
    }
  }
}
</style>