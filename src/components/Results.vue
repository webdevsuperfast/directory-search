<template>
  <b-container>
    <b-row>
      <b-col>
        <b-table :items="searchList" :fields="fields" class="w-75 ml-auto mr-auto">
          <template v-slot:cell(url)="data">
            <b-button :href="data.item.url" target="_blank" variant="success">Visit</b-button>
          </template>
          <template v-slot:cell(delete)="data">
            <b-button variant="danger" @click="removeSearchItem(data.index)">Delete</b-button>
          </template>
        </b-table>
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
      searchList: [],
      fields: [
        {
          key: "keyword",
          label: "Keyword"
        },
        {
          key: "filetype",
          label: "Type"
        },
        {
          key: "url",
          label: "URL"
        },
        {
          key: "delete",
          label: "Delete"
        }
      ]
    };
  },
  watch: {
    msg: function() {
      this.searchList.push(this.msg);
      this.storeSearches();
    }
  },
  methods: {
    storeSearches: function() {
      localStorage.setItem("searchItems", JSON.stringify(this.searchList));
    },
    removeSearchItem: function(index) {
      this.searchList.splice(index, 1);
      this.storeSearches();
    }
  },
  created: function() {
    let storedSearches = JSON.parse(localStorage.getItem("searchItems"));
    if (storedSearches != null) {
      this.searchList = storedSearches;
    }
  }
};
</script>