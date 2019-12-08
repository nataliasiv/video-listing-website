<template>
  <section class="film-cards component">
    <h2>{{ title }}</h2>
    <router-link :to="{name: 'listing-details', params: { id: latest.id }}" class="film-details">
      <Poster/>
      <h3>{{ latest.title }}<span v-if="latest.original_language">({{ latest.original_language }})</span></h3>
      <p v-if="latest.overview">{{ latest.overview }}</p>
      <p v-if="latest.release_date" class="release-date">Original release: {{ latest.release_date }}</p>
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
        latest: [],
      }
    },
    created() {
      LatestService.getLatest()
      .then(reponse => { this.latest = reponse.data })
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
