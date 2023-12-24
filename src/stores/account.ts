import { ref } from 'vue';
import { Address } from 'abitype';
import { getAccount, walletClient } from '../contracts/init';
import { defineStore } from 'pinia';

export const useAccountStore = defineStore('account', () => {
  const address = ref<Address | undefined>(undefined);
  const isLoading = ref(false);
  const isConnected = ref(false);

  async function connect() {
    isLoading.value = true;

    try {
      await walletClient.requestAddresses();
      const account = await getAccount();

      if (!account) {
        throw new Error('No account');
      }

      address.value = account;
      isConnected.value = !!account;
    } catch (e) {
      throw e;
    } finally {
      isLoading.value = false;
    }
  }

  function disconnect() {
    address.value = undefined;
    isConnected.value = false;
  }

  return { address, isLoading, isConnected, connect, disconnect };
});
