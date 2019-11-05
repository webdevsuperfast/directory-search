<template>
  <router-link to="/">
    <b-img-lazy class="mb-4 d-none d-md-block" fluid :src="`${publicPath}images/logo_with_text.png`" alt="Open Directory Search"></b-img-lazy>
    <b-img-lazy class="mb-4 d-block mx-auto d-md-none" :src="`${publicPath}images/logo.svg`" width="100" alt="Open Directory Search"></b-img-lazy>
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>