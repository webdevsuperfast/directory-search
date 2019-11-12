<template>
  <b-container>
    <b-row>
      <b-col>
        <ul>
          <li
            v-for="(search, index) in searchList"
            :item="search"
            :key="index"
          >{{ search.keyword }} {{ search.url }}</li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Results",
  props: {
    msg: {
      type: Object
    }
  },
  data: function() {
    return {
      searchList: []
    };
  },
  watch: {
    msg: function() {
      this.searchList.push(this.msg);
      this.storeSearches()
    }
  },
  methods: {
    storeSearches: function() {
      localStorage.setItem('searchItems', JSON.stringify(this.searchList)) 
    }
  },
  created: function() {
    let storedSearches = JSON.parse(localStorage.getItem('searchItems'))
    if (storedSearches != null) {
      this.searchList = storedSearches
    }
  }
};
</script>