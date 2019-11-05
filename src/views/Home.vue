<template>
  <main class="mx-auto my-auto">
    <Logo />
    <Search />
    <Git />
  </main>
</template>

<script>
import Logo from '@/components/Logo'
import Search from '@/components/Search'
import Git from '@/components/Git'

export default {
  name: 'Home',
  components: {
    Logo,
    Search,
    Git
  }
}
</script>