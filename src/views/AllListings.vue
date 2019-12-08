<template>
    <main>
      <h1>All Films</h1>
      <p class="subtitle">Browse and filter through all films</p>
      <SearchForm/>
      <Sort/>
      <FilmCard/>
    </main>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import Sort from '@/components/Sort.vue';
import FilmCard from '@/components/FilmCard.vue';

export default {
    components: {
        SearchForm,
        Sort,
        FilmCard
    }
}
</script>

<style>

</style>