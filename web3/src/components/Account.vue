<template>
  <div class="row items-center">
    <q-avatar  icon="account_circle" size="xl" />
    <div class="column">
      <template v-if="isConnected">
        <div class="text-weight-bold">{{ sliceAddress(address) }}</div>
        <div class="text-weight-regular" v-if="isTokenLoading">Loading...</div>
        <div class="text-weight-regular" v-else>{{ balanceStr }} MSCoin</div>
      </template>
      <template v-else>
        <div class="text-weight-regular">Not connected</div>
      </template>
    </div>
    <div class="q-ma-xs q-gutter-sm">
      <q-btn outline size="sm" padding="xs" icon="currency_exchange" color="secondary" :disabled="!isConnected" @click="onOpen" />
      <q-btn outline size="sm" padding="xs" icon="currency_bitcoin" color="secondary" :disabled="!isConnected" @click="addDisplayToken" />
    </div>
  </div>
  <!-- <modal-token-transaction :is-open="isOpen" @onOpenChange="onOpenChange" /> -->
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useAccountStore } from '../stores/account';
import { sliceAddress } from '../utils/utils';
import { storeToRefs } from 'pinia';
import { useTokenStore } from '../stores/token';

// import ModalTokenTransaction from './ModelTokenTransaction.vue';

const { isOpen, onOpen, onOpenChange } = ref(false);
const { address, isConnected } = storeToRefs(useAccountStore());
const { balanceStr, isTokenLoading } = storeToRefs(useTokenStore());
const { addDisplayToken, updateBalance } = useTokenStore();

onMounted(() => {
  if (isConnected) {
    updateBalance().catch(console.error);
  }
});
</script>
  