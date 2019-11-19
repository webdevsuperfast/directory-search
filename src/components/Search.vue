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
              id="search-input" type="text" 
              :placeholder="'Search anything e.g. ' + placeholder" 
              v-on:keydown.enter.prevent
              @change="getQuery"
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
            >
            </b-form-select>
          </b-col>
          <b-col lg="2">
            <b-button block size="lg" variant="primary" @click="addUrl" :disabled="isDisabled">Search</b-button>
          </b-col>
        </b-form-row>
      </b-form>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      filetype: 'everything',
      placeholder: '',
      url: '',
      urls: [],
      keyword: '',
      filetypes: {
        everything: 'Everything',
        music: 'Music',
        video: 'Video',
        ebook: 'E-Book',
        image: 'Images',
        archive: 'Archive',
        cd: 'Games/Software' 
      },
      api: {
        baseUrl: 'https://www.google.com/search?q=',
        formats: '',
        query: '',
        inTitle: 'index.of',
        inUrl: [
          '(jsp|pl|php|html|aspx|htm|cf|shtml|hypem|unknownsecret|sirens|writeups|trimediacentral|articlescentral)',
          '(listen77|mp3raid|mp3toss|mp3drug|theindexof|index_of|wallywashis|indexofmp3)'
        ]
      }
    }
  },
  computed: {
    isDisabled: function() {
      return this.keyword.length == 0
    }
  },
  methods: {
    getFiletype: function(type) {
      switch (type) {
        case 'music':
          this.api.formats = '(ogg|mp3|flac|wma|m4a|flac|alac|ape|aac)'
          break;
        case 'video':
          this.api.formats = '(mkv|mp4|avi|mov|mpg|wmv)'
          break;
        case 'ebook':
          this.api.formats = '(mobi|cbz|cbr|cbc|chm|epub|fb2|lit|lrf|odt|pdf|prc|pdb|pml|rb|rtf|tcr)'
          break;
        case 'image':
          this.api.formats = '(jpg|gif|png|tif|tiff|psd)'
          break;
        case 'archive':
          this.api.formats = '(rar|tar|zip|sit|7z|iso|dmg|cab)'
          break;
        case 'cd':
          this.api.formats = '(exe|apk|app|ipa|msi)'
          break;
        default:
          this.api.formats = ''
          break;
      }
    },
    addPlaceholder: function(type) {
      switch (type) {
        case 'music':
          this.placeholder = 'Beethoven'
          break;
        case 'video':
          this.placeholder = 'Big Buck Bunny'
          break;
        case 'ebook':
          this.placeholder = 'Epic of Gilgamesh'
          break;
        case 'image':
          this.placeholder = 'Tux'
          break;
        case 'archive':
          this.placeholder = 'Debian'
          break;
        case 'cd':
          this.placeholder = 'SuperTuxCart'
          break;
        default:
          this.placeholder = 'Debian Operating System'
          break;
      }
    },
    getQuery: function() {
      this.api.query = this.keyword.replace(/ +/g, " ").trim()
    },
    getTypePlaceholder: function() {
      this.getFiletype(this.filetype)
      this.addPlaceholder(this.filetype)  
    },
    addUrl: function() {
      const { baseUrl, query, formats, inTitle, inUrl } = this.api
      let apiUrl, finalQuery
      
      if (formats){
        finalQuery = `intext:"${query}" intitle:"${inTitle}" +${formats} -inurl:${inUrl[0]} -inurl:${inUrl[1]}`
      } else {
        finalQuery = `intext:"${query}" intitle:"${inTitle}" -inurl:${inUrl[0]} -inurl:${inUrl[1]}`
      }

      apiUrl = `${baseUrl}`+encodeURIComponent(finalQuery)

      this.url = apiUrl
      
      window.open(apiUrl)
    },
  },
  created() {
    this.getFiletype(this.filetype)
    this.addPlaceholder(this.filetype)
  }
}
</script>