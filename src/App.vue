<template>
  <div id="app" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <main class="mx-auto my-auto">
      <Logo />
      <Search />
    </main>
  </div>
</template>

<script>
import Search from '@/components/Search'
import Logo from '@/components/Logo'

export default {
  name: 'app',
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
  },
  components: {
    Search,
    Logo
  }
}
</script>
