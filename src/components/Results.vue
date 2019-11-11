<template>
  <b-table striped hover :items="searches"></b-table>  
</template>

<script>
export default {
  props: {
    searches: {
      type: Object,
      required: true
    }
  }
}
</script>