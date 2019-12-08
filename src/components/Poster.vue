<template>
    <div class="poster-default">
        <img v-if=films.poster_path :src="'https://image.tmdb.org/t/p/w500' + films.poster_path" alt="Film poster" class="poster" width="300">
        <img v-else :src="img" alt="No film poster" width="150" height="150" class="default-img">
    </div>
</template>

<script>
import LatestService from '@/services/LatestService.js'
import lens from '@/assets/lens.svg'

export default {
    data() {
      return {
        img: lens,
        films: []
      }
    },
    created() {
      LatestService.getUpcoming()
      .then(reponse => { console.log(this.films = reponse.data.results) })
      .catch(error => { console.log('Error' + error) })
    }
}
</script>

<style lang="scss">
.film-details:hover {

    .default-img {
      transform: scale(2) rotate(50deg);
    }
}

.poster {
    border-radius: $img-border-radius;
    width: 100%;
    object-fit: cover;
}

.poster-default {
    @include flex-align(center, center);
    height: 30rem;
    max-width: 30rem;
    background: $bg-color-alt;
    overflow: hidden;
    border-radius: $img-border-radius;
    box-shadow: $base-box-shadow;
    margin-top: 3rem;

    img {
      transition: $base-transition;
    }
}
</style>