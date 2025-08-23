<script setup>
import { defineProps, ref, Text } from 'vue';
import Modal from './Modal.vue';

const isOpen = ref(false);
const hoverTimeout = ref(null); // To store the timeout ID
const isModalOpenedByHover = ref(false); // New ref to track if modal was opened by hover

const props = defineProps({
  project: Object,
  color: String,
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
  <img
    :src="props.project.imageUrl"
    :alt="`Image for ${props.project.name}`"
    class="mb-4 h-52 w-80 rounded-2xl border-gray-300 bg-gray-200 object-cover opacity-55 shadow-2xl"
    @error="handleImageError"
  />

  <span class="mb-2 flex hover:cursor-pointer" @mouseover="openModal" @mouseleave="cancelOpenModal">
    <span class="font-roboto-mono text-2xl font-light text-gray-900">
      {{ props.project.name }}
    </span>
    <span class="font-roboto-mono ml-2 font-extralight text-gray-600">
      {{ isOpen ? '▲' : '▼' }}
    </span>
  </span>

  <span class="text-sm font-light text-gray-700">
    <span class="mr-2">&gt;&gt;</span>
    <span
      v-for="(item, index) in props.project.tech"
      :key="index"
      class="font-roboto-mono text-gray-700"
    >
      {{ item }}{{ index === props.project.tech.length - 1 ? '' : ', ' }}
    </span>
  </span>

  <Modal :is-open="isOpen" @close="closeModalFromModal">
    <template #header class="roboto-mono">
      <span>
        <span :style="{ color: props.color }" class="pr-2 dark:text-purple-400">{{
          props.project.name
        }}</span>
        <span class="p-1 text-sm" :class="difficultyClass">{{ props.project.color }}</span>
      </span>
      <p class="roboto-mono mt-1 text-sm font-light">
        {{ $t(props.project.text) }}
      </p>
    </template>
  </Modal>
</template>
