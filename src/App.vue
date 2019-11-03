<template>
  <div id="app" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <main class="mx-auto my-auto">
      <Logo />
      <Search />
    </main>
  </div>
</template>

<script>
import Search from '@/components/Search'
import Logo from '@/components/Logo'

export default {
  name: 'app',
  components: {
    Search,
    Logo
  }
}
</script>
