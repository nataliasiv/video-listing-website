<template>
    <div v-if="videos.results[0]">
        <button @click="toggleTrailer" type="button" class="btn-trailer">Watch Trailer</button>
        <div @click="toggleTrailer" :class="{visible: visibleTrailer}">
            <span class="trailer-close-instructions">Click anywhere outside the trailer to return to the details page.</span>
            <iframe v-if="videos.results[0].site === 'YouTube'" :src="'https://www.youtube.com/embed/' + videos.results[0].key + '?autoplay=' + autoplay" width="720" height="405" allow="autoplay;" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visibleTrailer: false,
      autoplay: false,
      video: []
    }
  },
  props: {
    videos: Object
  },
  methods: {
    toggleTrailer() {
      this.visibleTrailer = !this.visibleTrailer;
      this.autoplay = !this.autoplay;
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-trailer {
  margin: 3rem 0 0;
  width: 100%;
}

iframe, .trailer-close-instructions {
  display: none;
}

// Visible overlay and iframe
div.visible {
  @include flex-align(center, center);
  flex-direction: column;
  background: $color-transparent;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  iframe {
    display: block;
  }

  .trailer-close-instructions {
    display: block;
    color: white;
    font-weight: 400;
  }
}
</style>