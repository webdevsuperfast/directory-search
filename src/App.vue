<template>
  <div id="app" class="d-flex align-items-center">
    <b-container class="p-0" fluid>
      <Logo />
      <Search @search="getSearchString" @filetype="getFileTypeString" @url="addUrl" />
      <Git />
    </b-container>
  </div>
</template>

<script>
import Search from '@/components/Search'
import Git from '@/components/Git'
import Logo from '@/components/Logo'

export default {
  name: 'app',
  components: {
    Search,
    Git,
    Logo
  },
  data() {
    return {
      url: '',
      urls: [],
      api: {
        baseURL: 'https://google.com/search?q=',
        formats: '',
        query: '',
        inTitle: 'index.of',
        inURL: '(jsp|pl|php|html|aspx|htm|cf|shtml|hypem|unknownsecret|sirens|writeups|trimediacentral|articlescentral|listen77|mp3raid|mp3toss|mp3drug|theindexof|index_of|wallywashis|indexofmp3)'
      }
    }
  },
  methods: {
    getFileTypeString: function(type) {
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
    getSearchString: function(searchParams) {
      this.api.query = searchParams.join(' ')
    },
    addUrl: function() {
      const { baseURL, query, formats, inTitle, inURL } = this.api
      let apiUrl, finalQuery
      
      if (formats){
        finalQuery = `intext:"${query}" intitle:"${inTitle}" +${formats} -inurl:${inURL}`
      } else {
        finalQuery = `intext:"${query}" intitle:"${inTitle}" -inurl:${inURL}`
      }

      apiUrl = `${baseURL}`+encodeURIComponent(finalQuery)

      this.url = apiUrl
      
      window.open(apiUrl)
      // console.log(this.url)
    }
  },
  metaInfo: {
    title: 'Open Directory Search',
    titleTemplate: '%s - Find Almost Anything You Want',
    meta: [
      {
        description: 'Search open directories. Take advantage of Google\'s powerful search engine.'
      },
      { 
        keywords: [
          'open directory',
          'search engine',
          'direct download',
          'music',
          'ebook',
          'video',
          'software',
          'archive'
        ] 
      }
    ]
  }
}
</script>
