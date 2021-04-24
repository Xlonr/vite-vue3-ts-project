<template>
  <div>
    <span>{{ welcome }}</span>
    <div class="layout" @click="changeCount">{{ count }}</div>
  </div>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const welcome = ref('Hello welcome!')
const store = useStore()
const count = computed(() => store.state.count)

function changeCount() {
  store.dispatch('updateCount')
}

console.log(store)

</script>

<style lang="sass">
.layout
  cursor: pointer
</style>
