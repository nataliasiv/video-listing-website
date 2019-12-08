<template>
  <div class="film-cards component">
    <h2>{{ title }}</h2>
    <router-link :to="{name: 'listing-details', params: { id: latest.id }}" class="film-details">
      <img v-if=latest.poster_path :src=latest.poster_path alt="Latest film poster">
      <div v-else class="poster-default">
        <img src="@/assets/lens.svg" alt="No film poster" width="150" height="150">
      </div>
      <h3>{{ latest.title }}<span v-if=latest.original_language>({{ latest.original_language }})</span></h3>
      <p v-if=latest.overview>{{ latest.overview }}</p>
      <p v-if=latest.release_date class="release-date">Original release: {{ latest.release_date }}</p>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    props: {
      title: String,
      id: Number
    },
    data() {
      return {
        latest: []
      }
    },
    created() {
    axios
    .get('https://api.themoviedb.org/3/movie/latest?api_key=13aeb3fe065f4b10d4cacbafd800335b')
    .then(reponse => {
      console.log(this.latest = reponse.data)
    })
    .catch(error => {
      console.log('Error' + error)
    })
  }
}
</script>

<style lang="scss">
.film-cards {
  display: grid;
  align-items: center;

  @include min(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include min(laptop) {
    grid-template-columns: repeat(3, 1fr);
  }

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
  margin-top: 3rem;

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

  .release-date {
    margin-top: $base-spacer;
    color: $text-color-secondary;
  }

  .poster-default {
    @include flex-align(center, center);
    width: 100%;
    height: 30rem;
    background: $bg-color-alt;
    border-radius: $img-border-radius;
  }
}
</style>
