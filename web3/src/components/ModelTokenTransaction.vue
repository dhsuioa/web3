<template>
    <q-dialog v-model="isOpen" @hide="handleReset">
      <q-card>
        <q-card-section class="q-pt-md">
          <h5 class="text-h6">
            Token {{ selectedOption.has('transfer') ? 'transfer' : 'minting' }}
          </h5>
        </q-card-section>
        <q-card-section>
          <q-input
            v-model="formik.values.to"
            label="Recipient"
            placeholder="0x..."
            :error="formik.touched.to && !!formik.errors.to"
            :error-message="formik.touched.to && formik.errors.to"
          />
          <q-input
            v-model="formik.values.value"
            label="Amount"
            placeholder="Enter the amount of tokens to send"
            :error="formik.touched.value && !!formik.errors.value"
            :error-message="formik.touched.value && formik.errors.value"
          />
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-btn color="negative" label="Close" @click="handleReset" />
          <q-btn-group>
            <q-btn
              type="submit"
              :disable="isTransferring || !isConnected"
              @click="handleSubmit"
            >
              <q-spinner v-if="isTransferring" size="sm" />
              {{ selectedOption.has('transfer') ? 'Transfer' : 'Mint' }}
            </q-btn>
            <q-dropdown v-if="isOwner" v-model="selectedOption">
              <q-btn
                is-icon-only
                color="primary"
                label="MdArrowDropDown"
              />
              <q-menu>
                <q-list>
                  <q-item
                    v-for="option in ['transfer', 'mint']"
                    :key="option"
                    @click="setSelectedOption(option)"
                  >
                    {{ option }}
                  </q-item>
                </q-list>
              </q-menu>
            </q-dropdown>
          </q-btn-group>
        </q-card-section>
      </q-card>
    </q-dialog>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
  import { useAccount } from 'src/store/useAccount.ts';
  import { useToken } from 'src/store/useToken.ts';
  import { toast } from 'vue-toastification';
  import { strToBigint } from 'src/utils/utils.ts';
  
  const { transfer, isTransferring, mint, isOwner } = useToken();
  const { isConnected } = useAccount();
  
  const { isOpen: propIsOpen, onOpenChange: propOnOpenChange } = defineProps(['isOpen', 'onOpenChange']);
  
  const isOpen = ref(propIsOpen);
  const selectedOption = ref(new Set(['transfer']));
  const formik = useForm({
    initialValues: {
      to: '',
      value: '',
    },
    validationSchema: yup.object().shape({
      to: yup.string().required('Required').matches(/^0x/, 'Address must start with 0x'),
      value: yup.number().required('Required').positive('Must be positive'),
    }),
    onSubmit: async (values) => {
      const valueBigint = strToBigint(values.value);
  
      try {
        if (selectedOption.value.has('mint')) {
          await mint(valueBigint, values.to);
          toast.success(`Minted to ${values.to}`);
        } else {
          await transfer(valueBigint, values.to);
          toast.success(`Transferred to ${values.to}`);
        }
      } catch (e) {
        toast.error(e.message);
      }
    },
  });
  
  const handleReset = () => {
    formik.resetForm();
    formik.setTouched({ to: false, value: false });
    isOpen.value = false;
    propOnOpenChange(false);
  };
  
  const handleSubmit = () => {
    formik.handleSubmit();
  };
  
  const setSelectedOption = (option) => {
    selectedOption.value = new Set([option]);
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>