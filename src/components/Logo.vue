<template>
  <b-img-lazy class="mb-4" fluid :src="`${publicPath}images/logo_with_text.png`" alt="Open Directory Search"></b-img-lazy>
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