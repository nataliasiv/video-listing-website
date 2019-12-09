<template>
  <section class="details-card">
    <Poster :posterPath="details.poster_path"/>
    <div class="details-card__details">
      <h3>{{ details.title }}</h3>
      <p class="details-card__subtitle details__subtitle" v-if="details.tagline">{{ details.tagline }}</p>
      <div class="details-card__genre" v-if="details.genres">
        <p v-for="genre in details.genres" :key="genre.key">{{ genre.name }}</p>
      </div>
      <p v-if="details.overview">{{ details.overview }}</p>
      <div class="card__rating" v-if="details.vote_average">
          <img :src="icon" alt="star" width="25" height="25">
          <span>{{ details.vote_average }} / 10</span>
      </div>
      <p class="details-card__release-date" v-if="details.release_date">Original release: {{ details.release_date }}</p>
    </div>
    <WatchTrailer :videos="details.videos"/>
  </section>
</template>

<script>
import Poster from '@/components/Poster.vue'
import WatchTrailer from '@/components/WatchTrailer.vue'
import star from '@/assets/star.svg';

export default {
    components: {
      Poster,
      WatchTrailer
    },
    data() {
      return {
        icon: star
      }
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