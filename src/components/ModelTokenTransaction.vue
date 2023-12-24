<template>
      <q-card>
        <q-card-section class="q-pt-md">
          <h5 class="text-h6">
            Token {{ selectedOption ? 'Transfer' : 'Mint' }}
          </h5>
        </q-card-section>
        <q-card-section>
          <q-input v-for="input in inputs"
            v-model="input.value"
            outlined
            :label="input.label"
            :placeholder="input.placeholder"
            :rules="input.rules"
            :type="input.type"
          />     
        </q-card-section>
        <q-card-section class="q-pa-md q-gutter-md">
          <q-btn color="negative" outline label="Close" v-close-popup />
          <q-btn-group>
            <q-btn    
              color="primary"   
              outline     
              type="submit"
              :disable="isTransferring || !isConnected"
              @click="handleSubmit"
            >
              <q-spinner v-if="isTransferring" size="sm" />
              {{ selectedOption ? 'Transfer' : 'Mint' }}
            </q-btn>
            <q-btn-dropdown v-if="isOwner" 
                v-model="selectedOption" 
                auto-close 
                color="primary"
                outline
                padding="none">
                <q-list>
                  <q-item
                    v-for="option in ['transfer', 'mint']"
                    :key="option"
                    clickable
                    @click="setSelectedOption(option)"
                  >
                    {{ option }}
                  </q-item>
                </q-list>
            </q-btn-dropdown>
          </q-btn-group>
        </q-card-section>
      </q-card>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  import { useAccountStore } from '../stores/account';
  import { useTokenStore } from '../stores/token';
  import { strToBigint } from '../utils/utils';
  import { useQuasar } from 'quasar';
  
  const { transfer, isTransferring, mint, isOwner } = useTokenStore();
  const { isConnected } = useAccountStore();
  
  const inputs = ref([
    {
      label: 'Recipient',
      placeholder: '0x...',
      value: '',
      rules: [
        (v) => !!v || 'Required',
        (v) => /^0x/.test(v) || 'Address must start with 0x',
      ],
    },
    {
      label: 'Amount',
      placeholder: 'Enter the amount of tokens to send',
      value: '',
      rules: [
        (v) => !!v || 'Required',
        (v) => +v > 0 || 'Must be positive',
      ],
      type: 'number',
    },
  ])

  const selectedOption = ref(new Set(['transfer']));
  const $q = useQuasar()

  const handleSubmit = async () => {
  const values = inputs.value.reduce((acc, input) => {
    acc[input.label.toLowerCase()] = input.value;
    return acc;
  }, {});

  const valueBigint = strToBigint(values.amount);

  try {
    if (selectedOption.value.has('mint')) {
      await mint(valueBigint, values.recipient);
      $q.notify({ type: 'positive', message: `Minted to ${values.recipient}` });
    } else {
      await transfer(valueBigint, values.recipient);
      $q.notify({ type: 'positive', message: `Transferred to ${values.recipient}` });
    }
  } catch (e) {
    $q.notify({ type: 'negative', message: e.message });
  }
};
  
const setSelectedOption = (option) => {
  selectedOption.value = new Set([option]);
};
  </script>
  
  <style scoped>

  </style>