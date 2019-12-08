<template>
  <section class="film-cards component">
    <h2>{{ title }}</h2>
    <router-link v-for="film in films" :key="film.id" :to="{name: 'listing-details', params: { id: film.id }}" class="film-details">
      <Poster/>
      <h3>{{ film.title }}<span v-if="film.original_language">({{ film.original_language }})</span></h3>
      <p v-if="film.overview">{{ film.overview }}</p>
      <p v-if="film.release_date" class="release-date">Original release: {{ film.release_date }}</p>
    </router-link>
  </section>
</template>

<script>
import Poster from '@/components/Poster.vue'
import LatestService from '@/services/LatestService.js'

export default {
    components: {
      Poster,
    },
    props: {
      title: String,
      id: Number
    },
    data() {
      return {
        films: [],
      }
    },
    created() {
      LatestService.getUpcoming()
      .then(reponse => { this.films = reponse.data.results })
      .catch(error => { console.log('Error' + error) })
    }
}
</script>

<style lang="scss">
.film-cards {
  @include base-grid(3rem, repeat(3, 1fr));
  align-items: center;

  h2 {

    @include min(tablet) {
      grid-column: 1/3;
    }
    
    @include min(laptop) {
      grid-column: 1/4;
    }
  }

  .film-details:first-of-type {

    @include min(tablet) {
      grid-column: 1/2;
    }
  }
}

.film-details {
  @include flex-direction(column);
  align-self: flex-start;

  span {
    margin-left: .8rem;
    font: {
      size: 1.6rem;
      weight: 300;
    }
  }

  h3 {
    margin-top: 2rem;
  }
}

.release-date {
    margin-top: $base-spacer;
    color: $text-color-secondary;
}
</style>
