<template>
  <div id="app">
    <UsrMsg @inputData="updateMessage" />
    <Results :msg="childData" />
  </div>
</template>

<script>
import UsrMsg from "@/components/UsrMsg";
import Results from "@/components/Results";

export default {
  name: "App",
  components: {
    UsrMsg,
    Results
  },
  data: function() {
    return {
      childData: ""
    };
  },
  methods: {
    updateMessage: function(variable) {
      this.childData = variable;
    }
  }
};
</script>