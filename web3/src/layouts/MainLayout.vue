<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-white text-black">
      <q-toolbar>      
        <Account/>
        <q-space/>
        <ConnectAccount/>
      </q-toolbar>
    </q-header>
    
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ConnectAccount from 'src/components/ConnectAccount.vue';
import Account from 'src/components/Account.vue';

</script>
