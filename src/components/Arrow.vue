<template>
  <a class="arrow-icon" :class="{ open: showSearches }" @click="showSearches = !showSearches">
    <span class="left-bar"></span>
    <span class="right-bar"></span>
  </a>
</template>

<script>
export default {
  name: 'ArrowDown',
  data: function() {
    return {
      showSearches: false
    }
  }
}
</script>
<style lang="scss" scoped>
  $easing: cubic-bezier(.25,1.7,.35,.8);
  $duration: 0.5s;
  $background: lightcoral;

  .arrow-icon {
    height: 2.8em;
    width: 2.8em;
    display:block;
    padding: 0.5em;
    margin: 1em auto;
    position: relative;
    cursor: pointer;
    border-radius: 4px;
  }

  .left-bar {
    position: absolute;
    background-color: transparent;
    top: 0;
    left:0;
    width: 40px;
    height: 10px;
    display: block;
    transform: rotate(35deg);
    float: right;
    border-radius: 2px;
    &:after {
      content:"";
      background-color: $background;
      width: 40px;
      height: 10px;
      display: block;
      float: right;
      border-radius: 6px 10px 10px 6px;
      transition: all $duration $easing;
      z-index: -1;
    }
  }

  .right-bar {
    position: absolute;
    background-color: transparent;
    top: 0px;
    left:26px;
    width: 40px;
    height: 10px;
    display: block;
    transform: rotate(-35deg);
    float: right;
    border-radius: 2px;
    &:after {
      content:"";
      background-color: $background;
      width: 40px;
      height: 10px;
      display: block;
      float: right;
      border-radius: 10px 6px 6px 10px;
      transition: all $duration $easing;
      z-index: -1;
    }
  }

  .open {
    .left-bar:after {
      transform-origin: center center;
      transform: rotate(-70deg);
    }
    .right-bar:after {
      transform-origin: center center;
      transform: rotate(70deg);
    }

  }

</style>