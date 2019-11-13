<template>
  <b-container class="pb-3 pt-3">
    <b-row>
      <b-col>
        <b-form class="w-75 ml-auto mr-auto">
          <b-form-row>
            <b-col lg="7">
              <b-form-input
                :placeholder="'Search Anything e.g. ' + placeholder"
                size="lg"
                v-model="keyword"
                @keydown.enter.prevent
              />
            </b-col>
            <b-col lg="3">
              <b-form-select
                size="lg"
                :options="filetypes"
                v-model="filetype"
                @change="updatePlaceHolder"
              ></b-form-select>
            </b-col>
            <b-col lg="2">
              <b-button block size="lg" variant="primary" @click="submit">Submit</b-button>
            </b-col>
          </b-form-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "UsrMsg",
  data: function() {
    return {
      keyword: "",
      filetype: "everything",
      placeholder: "Debian Operating System",
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
  methods: {
    submit: function() {
      this.$emit("inputData", this.keyword);
      this.$emit("filetype", this.filetype);
      this.$emit("url", this.url);
    },
    updatePlaceHolder: function(event) {
      switch (event) {
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
    }
  }
};
</script>