<script setup>
import Modal from '@/components/Modal.vue';
import { ref, computed } from 'vue';

const isOpen = ref(false);
const hoverTimeout = ref(null); // To store the timeout ID
const isModalOpenedByHover = ref(false); // New ref to track if modal was opened by hover

const props = defineProps({
  src: String,
  header: String,
  difficulty: String,
  level: String,
  subheader: String,
  color: String,
});

const difficultyClass = computed(() => {
  switch (props.difficulty) {
    case 'Familiar':
      return 'bg-purple-400 text-gray-900 rounded-sm';
      break;
    case 'Proficient':
      return 'bg-yellow-400 text-gray-900 rounded-sm';
      break;
    case 'Expert':
      return 'bg-green-400 text-gray-900 rounded-sm';
      break;
  }
});

const openModal = () => {
  if (isOpen.value || hoverTimeout.value) {
    return;
  }

  hoverTimeout.value = setTimeout(() => {
    isOpen.value = true;
    isModalOpenedByHover.value = true; // Mark that it was opened by hover
    hoverTimeout.value = null; // Clear the timeout ID once it fires
  }, 300); // in ms, change if needed
};

const cancelOpenModal = () => {
  if (hoverTimeout.value) {
    clearTimeout(hoverTimeout.value);
    hoverTimeout.value = null;
  }
};

const closeModalFromModal = () => {
  isOpen.value = false;
  isModalOpenedByHover.value = false; // Reset the flag when the modal is closed
};
</script>

<template>
  <div class="z-10">
    <div @mouseover="openModal" @mouseleave="cancelOpenModal">
      <img :src="props.src" width="48" height="48" />
    </div>

    <Modal :is-open="isOpen" @close="closeModalFromModal">
      <template #header class="roboto-mono">
        <span>
          <span :style="{ color: props.color }" class="pr-2 dark:text-purple-400">{{
            props.header
          }}</span>
          <span class="p-1 text-sm" :class="difficultyClass">{{ props.difficulty }}</span>
        </span>
        <p class="roboto-mono mt-1 text-sm font-light">
          {{ props.subheader }}
        </p>
      </template>
    </Modal>
  </div>
</template>
