<template>
  <section class="details-card">
    <Poster :posterPath="details.poster_path"/>
    <div class="details-card__details">
      <a v-if="details.homepage" :href="details.homepage"><h3>{{ details.title }}</h3></a>
      <p class="details-card__subtitle" v-if="details.tagline">{{ details.tagline }}</p>
      <div class="details-card__genre" v-if="details.genres">
        <p v-for="genre in details.genres" :key="genre.key">{{ genre.name }}</p>
      </div>
      <p v-if="details.overview">{{ details.overview }}</p>
      <p class="details-card__release-date" v-if="details.release_date">Original release: {{ details.release_date }}</p>
    </div>
    <WatchTrailer :videos="details.videos"/>
  </section>
</template>

<script>
import Poster from '@/components/Poster.vue'
import WatchTrailer from '@/components/WatchTrailer.vue'

export default {
    components: {
      Poster,
      WatchTrailer
    },
    props: {
      details: Object
    }
}
</script>

<style lang="scss">
.details-card {
  @include base-grid(6rem, 27rem 1fr);

  &__details {
    margin-top: 3rem;

    @include min(tablet) {
      grid-area: 1/2/3/3;
    }
  }

  p {
    line-height: 1.75;
  }
}

.details-card__genre {
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