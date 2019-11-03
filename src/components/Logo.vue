<template>
  <img :src="`${publicPath}images/logo.svg`" width="100" height="100" />
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