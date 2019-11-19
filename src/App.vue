<template>
  <div id="app" class="d-flex align-items-center">
    <b-container class="p-0" fluid>
      <Logo />
      <Search />
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
