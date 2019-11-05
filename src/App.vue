<template>
  <div id="app" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <router-view />
  </div>
</template>

<script>
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
  }
}
</script>
