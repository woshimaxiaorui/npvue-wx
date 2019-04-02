<template>
  <ul>
      <li v-for="(item, index) of prolist" :key="index">
        {{ item.title }}
      </li>
    </ul>
</template>

<script>
import store from '@/pages/home/store'
export default {
  computed: {
    prolist () {
      return store.state.prolist
    }
  }
}
</script>

