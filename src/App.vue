<template>
  <div id="app">
    <UsrMsg @inputData="updateMessage" @url="getUrl" />
    <Results :msg="{keyword, url}" />
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
      keyword: "",
      filetype: "",
      url: '',
      api: {
        baseUrl: "https://www.google.com/search?q=",
        formats: "",
        query: "",
        inTitle: "index.of",
        inUrl: [
          "(jsp|pl|php|html|aspx|htm|cf|shtml|hypem|unknownsecret|sirens|writeups|trimediacentral|articlescentral)",
          "(listen77|mp3raid|mp3toss|mp3drug|theindexof|index_of|wallywashis|indexofmp3)"
        ]
      }
    };
  },
  methods: {
    updateMessage: function(event) {
      this.keyword = event.replace(/ +/g, " ").trim();
      this.api.query = this.keyword
    },
    updateFileType: function(event) {
      switch (event) {
        case "music":
          this.api.formats = "(ogg|mp3|flac|wma|m4a|flac|alac|ape|aac)";
          break;
        case "video":
          this.api.formats = "(mkv|mp4|avi|mov|mpg|wmv)";
          break;
        case "ebook":
          this.api.formats =
            "(mobi|cbz|cbr|cbc|chm|epub|fb2|lit|lrf|odt|pdf|prc|pdb|pml|rb|rtf|tcr)";
          break;
        case "image":
          this.api.formats = "(jpg|gif|png|tif|tiff|psd)";
          break;
        case "archive":
          this.api.formats = "(rar|tar|zip|sit|7z|iso|dmg|cab)";
          break;
        case "cd":
          this.api.formats = "(exe|apk|app|ipa|msi)";
          break;
        default:
          this.api.formats = "";
          break;
      }
    },
    getUrl: function() {
      const { baseUrl, query, formats, inTitle, inUrl } = this.api
      let searchUrl, finalQuery

      if (formats) {
        finalQuery = `intext:"${query}" intitle:"${inTitle}" +${formats} -inurl:${inUrl[0]} -inurl:${inUrl[1]}`
      } else {
        finalQuery = `intext:"${query}" intitle:"${inTitle}" -inurl:${inUrl[0]} -inurl:${inUrl[1]}`
      }

      searchUrl = `${baseUrl}`+encodeURIComponent(finalQuery)

      this.url = searchUrl
    }
  }
};
</script>