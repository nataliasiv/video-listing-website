<template>
  <div class="component">
    <h2>{{ title }}</h2>
    <section class="card" :scrollType="scrollType">
      <router-link class="card__details" v-for="film in films" :key="film.id" :to="{name: 'listing-details', params: { id: film.id }}">
        <Poster :posterPath="film.poster_path"/>
        <h3>{{ film.title }}<span v-if="film.original_language">({{ film.original_language }})</span></h3>
        <div class="card__rating" v-if="film.vote_average">
          <img :src="icon" alt="star" width="25" height="25">
          <p>{{ film.vote_average }} / 10</p>
        </div>
        <p v-if="film.overview">{{ film.overview }}</p>
        <p class="card__release-date" v-if="film.release_date">{{ releaseMessage }}: {{ film.release_date }}</p>
      </router-link>
    </section>
  </div>
</template>

<script>
import Poster from '@/components/Poster.vue'
import FilmService from '@/services/FilmService.js'
import star from '@/assets/star.svg';

export default {
    components: {
      Poster
    },
    data() {
      return {
        films: [],
        icon: star
      }
    },
    props: {
      title: String,
      releaseMessage: String,
      scrollType: String,
      sort: String
    },
    created() {
      FilmService.getRecent()
      .then(reponse => { this.films = reponse.data.results })
      .catch(error => { console.log('Error' + error) })
    }
}
</script>

<style lang="scss">
.card[scrolltype="vertical"] {
  @include base-grid(3rem, repeat(3, 1fr));
  align-items: center;

  .card__details {
    align-self: flex-start;
  }
}

.card[scrolltype="horizontal"] {
  @include min(tablet) {
    display: flex;
    overflow: scroll;
    // Transforming the cards to get the scrollbar on top 
    // (Makes the horizontal scroll a bit more user friendly)
    transform:rotateX(180deg);

    .card__details {
      padding-right: 4rem;
      min-width: 27rem;
      transform:rotateX(180deg);
    }
  }
}

.component h2 {
  @include min(tablet) {
    margin-bottom: 1.5rem;
  }
}

.card__details {
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

.card__rating {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-weight: 400;

  img {
    margin-right: 1rem;
  }
}

.card__release-date {
  margin-top: $base-spacer;
  color: $text-color-secondary;
}
</style>
