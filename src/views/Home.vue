<template>
  <main class="mx-auto my-auto">
    <Logo />
    <Search />
    <Git />
    <ArrowDown />
  </main>
</template>

<script>
import Logo from '@/components/Logo'
import Search from '@/components/Search'
import Git from '@/components/Git'
import ArrowDown from '@/components/Arrow'

export default {
  name: 'Home',
  components: {
    Logo,
    Search,
    Git,
    ArrowDown
  }
}
</script>