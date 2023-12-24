<template>
  <q-layout view="hHh lpR fFf">

    <q-header  class="bg-white text-black">
      <q-toolbar class="row justify-center" align="right">    
        <div class="col-4 q-py-xl" >
          <Account/>
        </div>  
        <div class="col-4 q-py-xl" >
          <ConnectAccount/>
        </div>  
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
