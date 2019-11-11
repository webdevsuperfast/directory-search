<template>
  <main class="mx-auto my-auto">
    <Logo />
    <Search />
    <Git />
    <ArrowDown />
    <Results :searches="searches" />
  </main>
</template>

<script>
import Logo from '@/components/Logo'
import Search from '@/components/Search'
import Git from '@/components/Git'
import ArrowDown from '@/components/Arrow'
import Results from '@/components/Results'

export default {
  name: 'Home',
  components: {
    Logo,
    Search,
    Git,
    ArrowDown,
    Results
  }
}
</script>