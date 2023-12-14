<template>
  <div class="flex flex-row gap-3 items-center">
    <q-avatar color="white" text-color="black" icon="account_circle" />
    <div class="flex flex-col">
      <h3 class="text-default-700 font-bold">{{ sliceAddress(address) }}</h3>
      <h3 class="text-default-400 font-italic text-sm" v-if="isTokenLoading">Loading...</h3>
      <h3 class="text-default-400 font-italic text-sm" v-else>{{ balanceString }} PDG</h3>
    </div>
    <q-btn is-icon-only size="sm" variant="flat" color="secondary" :disabled="!isConnected" @click="onOpen">
      <md-icon>currency_exchange</md-icon>
    </q-btn>
    <q-btn is-icon-only size="sm" variant="flat" color="secondary" :disabled="!isConnected" @click="addDisplayToken">
      <md-icon>remove_red_eye</md-icon>
    </q-btn>
  </div>
  <!-- <modal-token-transaction :is-open="isOpen" @onOpenChange="onOpenChange" /> -->
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useAccountStore } from '../stores/account';
import { sliceAddress } from '../utils/utils';
import { storeToRefs } from 'pinia';
import { useTokenStore } from '../stores/token';
//   import ModalTokenTransaction from './modal/ModalTokenTransaction.vue';

const { isOpen, onOpen, onOpenChange } = ref(false);
const { address, isConnected } = storeToRefs(useAccountStore());
const { balanceString, isTokenLoading } = storeToRefs(useTokenStore());
const { addDisplayToken, updateBalance} = useTokenStore();

onMounted(() => {
  if (isConnected) {
    updateBalance().catch(console.error);
  }
});
</script>
  