<template>
  <div id="app" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <Search />
  </div>
</template>

<script>
import Search from '@/components/Search'

export default {
  name: 'app',
  components: {
    Search
  }
}
</script>
