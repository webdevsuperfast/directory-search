<template>
  <main class="mx-auto my-auto">
    <Logo />
    <Search />
  </main>
</template>

<script>
import Logo from '@/components/Logo'
import Search from '@/components/Search'

export default {
  name: 'Home',
  components: {
    Logo,
    Search
  }
}
</script>