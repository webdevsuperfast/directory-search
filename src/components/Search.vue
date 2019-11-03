<template>
  <main class="mx-auto my-auto">
    <b-form inline @submit.prevent="handleSubmit">
      <label class="sr-only" for="search-input">Search String</label>
      <b-form-input 
        name="keyword" 
        v-model="api.keyword" 
        id="search-input" type="text" 
        placeholder="keyword" 
        ></b-form-input>
      <label class="sr-only" for="search-select"></label>
      <b-form-select
        id="search-select"
        class="ml-2"
        :value="null"
        :options="filetypes"
        v-model.trim="filetype"
        v-on:change="getFiletype"
      >
      </b-form-select>
      <b-button variant="primary" class="ml-2">Search</b-button>
    </b-form>
    {{ url }}
  </main>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Search',
  mixins: [validationMixin],
  data() {
    return {
      filetype: 'music',
      url: '',
      form: {
        keyword: '',
        filetype: 'music'
      },
      filetypes: {
        music: 'Music',
        flac: 'Lossless Music',
        video: 'Video',
        ebook: 'E-Book',
        kindle: 'Kindle',
        image: 'Images',
        archive: 'Archive'
        // torrent: 'Torrent' 
      },
      api: {
        baseUrl: 'https://www.google.com/search?q=',
        formats: '(.ogg|.mp3|.flac|.wma|.m4a)',
        keyword: 'test',
        inTitle: '%22index of%22',
        inUrl: '(jsp|pl|php|html|aspx|htm|cf|shtml|hypem|unknownsecret|sirens|writeups|trimediacentral|articlescentral|listen77|mp3raid|mp3toss|mp3drug|theindexof|index_of|wallywashis|indexofmp3)'
      }
    }
  },
  validations: {
    keyword: {
      required,
      minLength: minLength(1)
    },
    filetype: {
      required
    }
  },
  methods: {
    getFiletype: function() {
      const type = this.filetype
      switch (type) {
        case 'music':
        default:
          return this.api.formats = '(.ogg|.mp3|.flac|.wma|.m4a)'
          break;
        case 'flac':
          return this.api.formats = '(.flac|.alac|.ape|.aac)'
          break;
        case 'video':
          return this.api.formats = '(.mkv|.mp4|.avi|.mov|.mpg|.wmv)'
          break;
        case 'ebook':
          return this.api.formats = '(.MOBI|.CBZ|.CBR|.CBC|.CHM|.EPUB|.FB2|.LIT|.LRF|.ODT|.PDF|.PRC|.PDB|.PML|.RB|.RTF|.TCR)'
          break;
        case 'kindle':
          return this.api.formats = '(.MOBI|.EPUB|.LIT)'
          break;
        case 'image':
          return this.api.formats = '(.jpg|.gif|.png|.tif|.tiff|.psd)'
          break;
        case 'archive':
          return this.api.formats = '(.rar|.tar|.zip|.sit)'
          break;
      }
    },
    convertKeyword: function() {

    },
    handleSubmit: function() {
      const { baseUrl, formats, keyword, inTitle, inUrl } = this.api
      const apiUrl = `${baseUrl}`+'%2B'+`${formats}`+'%20'+`${keyword}`+'%20intitle:'+`${inTitle}`+'%20%2Dinurl:'+`${inUrl}`
      return this.url = apiUrl
    }
  },
  computed: {
  },
  created: function() {
    this.handleSubmit()
  }
}
</script>