<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-orange text-white">
      <q-toolbar>
        <q-toolbar-title>
          <img  :src="require('../assets/class.png')">
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus">
.q-header {height: 80px}
</style>
