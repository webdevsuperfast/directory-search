<template>
  <div>
    <input placeholder="Enter Text Here" v-model="tempMessage" @keyup.enter="submit" />
  </div>
</template>

<script>
export default {
  name: "UsrMsg",
  data: function() {
    return {
      tempMessage: ''
    }
  },
  methods: {
    submit: function() {
      this.$emit("inputData", this.tempMessage)
      this.tempMessage = "";
    }
  }
}
</script>