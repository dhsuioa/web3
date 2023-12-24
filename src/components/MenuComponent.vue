<template>
    <div class="flex q-gutter-sm">
      <q-input
        v-model="filter"
        label="filter"
        outlined
        dense
        clearable
        @clear="resetFilter"
        @input="handleSetFilter"
      />
      <q-btn @click="handlerFilterEvents" rounded outline color="primary" :disable="!filter" type="submit">
        Search
      </q-btn>
      <q-btn @click="onOpen" rounded outline color="primary">
        Post
      </q-btn>
      <!-- <switch-poster /> -->
    </div>
    <!-- <modal-poster-creation :is-open="isOpen" @onOpenChange="onOpenChange" /> -->
  </template>
  
  <script setup>
  import { ref } from 'vue';
//   import { usePoster } from '../stores/poster';
//   import { useGatedPoster } from '../../store/useGatedPoster';
  
//   const filter = ref('');
//   const isOpen = ref(false);
//   const filterEvents = usePoster((state) => state.filterEvents);
//   const filterGatedEvents = useGatedPoster((state) => state.filterGatedEvents);
  
//   const resetFilter = () => {
//     filter.value = '';
//     resetEvents();
//   };
  
//   const resetEvents = () => {
//     filterEvents('');
//     filterGatedEvents('');
//   };
  
//   const handleSetFilter = (value) => {
//     filter.value = value;
//     if (!value.length) {
//       resetEvents();
//     }
//   };
  
//   const handlerFilterEvents = () => {
//     filterEvents(filter.value);
//     filterGatedEvents(filter.value);
//   };
  </script>
  