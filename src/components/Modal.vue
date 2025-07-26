<template>
  <Teleport to="#modals-container">
    <Transition name="modal-fade" class="z-20">
      <div
        v-if="isOpen"
        class="pointer-events-auto fixed inset-0 z-20 mt-20 flex items-center justify-center p-4"
      >
        <div class="bg-opacity-50 fixed inset-0" @click="closeModal"></div>
        <div class="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl dark:bg-gray-600">
          <button
            @click="closeModal"
            class="absolute top-0 right-0 pt-5 pr-6 text-xl text-gray-700 hover:cursor-pointer hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            x
          </button>

          <div class="mb-4 flex items-center justify-between">
            <h3 id="modal-header" class="text-xl font-semibold text-gray-900 dark:text-gray-100">
              <slot name="header">Default Header</slot>
            </h3>
          </div>

          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits, watch, onUnmounted } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:isOpen', 'close']);

const closeModal = () => {
  emit('update:isOpen', false); // For v-model
  emit('close');
};

const handleEscape = (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
};

watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }
  },
  { immediate: true },
);

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>

<style>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .relative,
.modal-fade-leave-active .relative {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.modal-fade-enter-from .relative,
.modal-fade-leave-to .relative {
  transform: scale(0.95);
  opacity: 0;
}
</style>
