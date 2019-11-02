<template>
  <main class="mx-auto my-auto">
    <b-form inline>
      <label class="sr-only" for="search-input">Search String</label>
      <b-form-input id="search-input" type="text" placeholder="keyword"></b-form-input>
      <label class="sr-only" for="search-select"></label>
      <b-form-select
        id="search-select"
        class="ml-2"
        :value="null"
        :options="filetypes"
      >
      <template v-slot:first>
        <option :value="null">Choose</option>
      </template>
      </b-form-select>
      <b-button variant="primary" class="ml-2">Search</b-button>
    </b-form>
  </main>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      query: '?q=',
      site: 'https://www.google.com/search',
      delimit: ' +intitle:%22index of%22 -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)',
      exclusions: ' -inurl:(hypem|unknownsecret|sirens|writeups|trimediacentral|articlescentral|listen77|mp3raid|mp3toss|mp3drug|theindexof|index_of|wallywashis|indexofmp3)',
      filetypes: {
        music: 'Music',
        flac: 'Lossless Music',
        video: 'Video',
        ebook: 'E-Book',
        kindle: 'Kindle',
        image: 'Images',
        archive: 'Archive',
        torrent: 'Torrent' 
      }
    }
  }
}
</script>