<template>
  <section id="form" class="form-section m-auto">
    <b-container fluid>
      <b-form>
        <b-form-row>
          <b-col lg="7">
            <label class="sr-only" for="search-input">Search String</label>
            <b-form-input
              autofocus
              name="keyword"
              size="lg"
              v-model="keyword"
              id="search-input"
              type="text"
              :placeholder="'Search anything e.g. ' + placeholder"
              v-on:keydown.enter.prevent
            ></b-form-input>
          </b-col>
          <b-col lg="3">
            <label class="sr-only" for="search-select"></label>
            <b-form-select
              id="search-select"
              size="lg"
              :value="null"
              :options="filetypes"
              v-model="filetype"
              @change="getTypePlaceholder"
            ></b-form-select>
          </b-col>
          <b-col lg="2">
            <b-button
              block
              size="lg"
              variant="primary"
              :disabled="isDisabled"
              @click="parseSearchString"
            >Search</b-button>
          </b-col>
        </b-form-row>
      </b-form>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      filetype: "everything",
      placeholder: "",
      keyword: "",
      url: '',
      filetypes: {
        everything: "Everything",
        music: "Music",
        video: "Video",
        ebook: "E-Book",
        image: "Images",
        archive: "Archive",
        cd: "Games/Software"
      }
    };
  },
  computed: {
    isDisabled: function() {
      return this.keyword.length == 0;
    }
  },
  methods: {
    addPlaceholder: function(type) {
      switch (type) {
        case "music":
          this.placeholder = "Beethoven";
          break;
        case "video":
          this.placeholder = "Big Buck Bunny";
          break;
        case "ebook":
          this.placeholder = "Epic of Gilgamesh";
          break;
        case "image":
          this.placeholder = "Tux";
          break;
        case "archive":
          this.placeholder = "Debian";
          break;
        case "cd":
          this.placeholder = "SuperTuxCart";
          break;
        default:
          this.placeholder = "Debian Operating System";
          break;
      }
    },
    parseSearchString: function() {
      const trimmedSearchString = this.keyword.trim();

      if (trimmedSearchString !== "") {
        const searchParams = trimmedSearchString.split(/\s+/);
        this.$emit("search", searchParams);
        this.$emit("filetype", this.filetype)
        this.$emit("url", this.url)
        console.log(this.filetype + searchParams)      
        this.keyword = "";
        this.filetype = 'everything';
        this.placeholder = 'Debian Operating System';
      }
    },
    getTypePlaceholder: function() {
      // this.getFiletype(this.filetype);
      this.addPlaceholder(this.filetype);
    }
  },
  created() {
    // this.getFiletype(this.filetype)
    this.addPlaceholder(this.filetype);
  }
};
</script>