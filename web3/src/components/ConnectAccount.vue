<template>
  <q-btn :color="buttonColor" @click="isConnected ? handleDisconnect() : handleConnect()">
    <q-spinner v-if="isLoading" size="sm" color="white" />
    {{ buttonText }}
  </q-btn>
</template>
  
<script setup>
import { computed } from 'vue';
import { useAccountStore } from '../stores/account';
import { useQuasar } from 'quasar'
import { storeToRefs } from 'pinia';

const $q = useQuasar()

const { isConnected, isLoading } = storeToRefs(useAccountStore());
const { connect, disconnect } = useAccountStore();
const buttonColor = computed(() => isConnected.value ? 'primary' : 'negative');
const buttonText = computed(() => isConnected.value ? 'Connected' : 'Sign in');


const handleConnect = () => {
  connect().catch((e) => showNotification('error', e.message));
};
//todo catch error
const handleDisconnect = () => {
  disconnect().catch((e) => showNotification('error', e.message));
};
//todo
function showNotification(type, message) {
  $q.notify({
    type,
    message,
    position: 'bottom',
    timeout: 3000,
  });
};
</script>
  