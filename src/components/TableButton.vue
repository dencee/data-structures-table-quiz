<template>
  <div>
    <button
      @click="$emit('btn-clicked')"
      :class="[{ 'btn-check': isCheck, 'btn-reset': isReset }, 'table-btn' ]"
    >
      {{ title }}
    </button>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useTableDataStore } from '@/stores/tableData';

const tableDataStore = useTableDataStore();

const props = defineProps({
  title: String,
});

const isCheck = computed(() => props.title.toLowerCase() === 'check');
const isReset = computed(() => props.title.toLowerCase() === 'reset');

</script>

<style lang="scss" scoped>
.table-btn {
  margin: 1rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 1.5rem;
}
.btn-check:hover {
  background-color: aquamarine;
  cursor: pointer;
}
.btn-reset:hover {
  background-color: red;
  cursor: pointer;
}
</style>