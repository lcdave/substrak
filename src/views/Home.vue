<template>
  <topbar />
  <list />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Topbar from '../components/Topbar.vue'
import List from '../components/List.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Topbar,
    List
  }
})
</script>
