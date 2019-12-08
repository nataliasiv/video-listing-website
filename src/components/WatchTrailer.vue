<template>
    <div v-if="video">
        <button @click="toggleTrailer" type="button" class="btn-trailer">Watch Trailer</button>
        <div @click="toggleTrailer" :class="{visible: visibleTrailer}">
            <span class="trailer-close-instructions">Click anywhere outside the trailer to close.</span>
            <iframe v-if="video.site === 'YouTube'" :src="'https://www.youtube.com/embed/' + video.key + '?autoplay=' + autoplay" width="720" height="405" allow="autoplay;" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
      return {
        visibleTrailer: false,
        autoplay: false,
        video: []
      }
    },
    methods: {
      toggleTrailer() {
        this.visibleTrailer = !this.visibleTrailer;
        this.autoplay = !this.autoplay;
      }
    },
    created() {
      axios
      .get('https://api.themoviedb.org/3/movie/550/videos?api_key=13aeb3fe065f4b10d4cacbafd800335b')
      .then(reponse => { console.log(this.video = reponse.data.results[0]) })
      .catch(error => { console.log('Error' + error) })
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