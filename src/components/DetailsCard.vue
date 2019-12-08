<template>
  <section class="details-card">
    <Poster/>
    <div class="details">
      <a v-if="details.homepage" :href="details.homepage"><h3>{{ details.title }}</h3></a>
      <p class="subtitle" v-if="details.tagline">{{ details.tagline }}</p>
      <div v-if="details.genres" class="genre">
        <p v-for="genre in details.genres" :key="genre.key">{{ genre.name }}</p>
      </div>
      <p v-if="details.overview">{{ details.overview }}</p>
      <p v-if="details.release_date" class="release-date">Original release: {{ details.release_date }}</p>
    </div>
    <ButtonMain v-if="video" @click="openTrailer" title="Watch Trailer" type="button" class="btn-trailer"/>
    <iframe v-if="video.site === 'YouTube'" :src="'https://www.youtube.com/embed/' + video.key + '?autoplay=' + {'1': autoplay}" :class="{visible: visibleTrailer}" width="720" height="405" allow="autoplay;" frameborder="0" allowfullscreen></iframe>
  </section>
</template>

<script>
import axios from 'axios';
import Poster from '@/components/Poster.vue';
import ButtonMain from '@/components/ButtonMain.vue';

export default {
    components: {
      Poster,
      ButtonMain
    },
    data() {
      return {
        visibleTrailer: false,
        autoplay: false,
        details: [],
        video: []
      }
    },
    methods: {
      openTrailer() {
        this.visibleTrailer = !this.visibleTrailer;
        this.autoplay = !this.autoplay;
      }
    },
    created() {
      axios
      .get('https://api.themoviedb.org/3/movie/550?api_key=13aeb3fe065f4b10d4cacbafd800335b')
      .then(reponse => { this.details = reponse.data })
      .catch(error => { console.log('Error' + error) })
    },
    beforeMount() {
      axios
      .get('https://api.themoviedb.org/3/movie/550/videos?api_key=13aeb3fe065f4b10d4cacbafd800335b')
      .then(reponse => { this.video = reponse.data.results[0] })
      .catch(error => { console.log('Error' + error) })
    }
}
</script>

<style lang="scss">
.details-card {
  @include base-grid(6rem, 30rem 1fr);

  .details {
    margin-top: 3rem;

    @include min(tablet) {
      grid-area: 1/2/3/3;
    }
  }

  .poster-default {
    width: 100%;
    justify-self: center;
  }
}

iframe {
  display: none;

  &.visible {
    display: block;
  }
}

.genre {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
    
    p {
      background: $color-accent;
      color: white;
      width: fit-content;
      padding: .5rem 1rem;
      border-radius: .5rem;
      box-shadow: $base-box-shadow;
      margin: .5rem 1rem .5rem 0;
      font: {
        weight: 400;
        size: 1.4rem;
      }
  }
}
</style>