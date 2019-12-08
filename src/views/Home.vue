<template>
  <main>
    <h1>Film Listings</h1>
    <p class="subtitle">Check out your favourite films here!</p>
    <p>Browse and filter through <router-link :to="{name: 'all-listings'}">all film listings</router-link> or search for a film below.</p>
    <SearchForm/>
    <FilmCard title="Recently Added"/>
  </main>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
import FilmCard from '@/components/FilmCard.vue'

export default {
  components: {
    SearchForm,
    FilmCard
  }
}
</script>
