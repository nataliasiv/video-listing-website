<template>
    <div class="trailer" v-if="video">
        <button class="trailer__btn" @click="toggleTrailer" type="button">Watch Trailer</button>
        <div @click="toggleTrailer" :class="{visible: visibleTrailer}">
            <span class="trailer__instructions--close">Click anywhere outside the trailer to return to the details page.</span>
            <iframe v-if="video.results[0].site === 'YouTube'" :src="'https://www.youtube.com/embed/' + video.results[0].key + '?autoplay=' + autoplay" width="720" height="405" allow="autoplay;" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visibleTrailer: false,
      autoplay: false
    }
  },
  props: {
    video: Object
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
iframe, .trailer__instructions--close {
  display: none;
}

.trailer {

  @include min(tablet) {
    grid-row: 2;
  }

  &__btn {
    margin-top: 3rem;
    width: 100%;
  }

  // Visible overlay and iframe, shows on click of "watch trailer" button
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

    .trailer__instructions--close {
      display: block;
      color: white;
      font-weight: 400;
    }
  }
}
</style>