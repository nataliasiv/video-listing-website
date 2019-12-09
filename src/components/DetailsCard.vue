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
    <WatchTrailer/>
  </section>
</template>

<script>
import Poster from '@/components/Poster.vue'
import WatchTrailer from '@/components/WatchTrailer.vue'
import axios from 'axios'

export default {
    components: {
      Poster,
      WatchTrailer
    },
    data() {
      return {
        details: []
      }
    },
    created() {
      axios
      .get('https://api.themoviedb.org/3/movie/' + this.filmId +'?api_key=13aeb3fe065f4b10d4cacbafd800335b&append_to_response=videos,images')
      .then(reponse => { console.log(this.details = reponse.data.results) })
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

  p {
    line-height: 1.75;
  }
}

.genre {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 2rem;
    
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