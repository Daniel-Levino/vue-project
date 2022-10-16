<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath=='/chat'"
          to="/"
          icon="arrow_back"
          label="back"
          flat
          dense
        />
        <q-toolbar-title class="absolute-center">
          {{ pageTitle }}
        </q-toolbar-title>
        <q-btn
        class="absolute-right q-mr-md"
          right
          to="/auth"
          icon="account_circle"
          label="login"
          flat
          dense
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: 'MainLayout',
  computed: {
    pageTitle() {
      let path = this.$route.fullPath;
      return path == '/auth' ? 'Login' : (path == '/chat' ? 'Chat' : 'Home');
    }
  }
}
</script>
