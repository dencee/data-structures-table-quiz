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

const props = defineProps({
  title: String,
});

const isCheck = computed(() => props.title === 'check' || props.title === 'answers');
const isReset = computed(() => props.title === 'reset');

</script>

<style lang="scss" scoped>
.table-btn {
  margin: 0 0.5rem 1rem;
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 3px;
  font-size: 1.1rem;
  background-color: var(--button-background);
}
.btn-check:hover {
  background-color: var(--button-check-hover);
  cursor: pointer;
}
.btn-reset:hover {
  background-color: var(--button-reset-hover);
  cursor: pointer;
}
</style>