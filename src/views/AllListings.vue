<template>
    <main>
      <h1>All Films</h1>
      <p class="subtitle">Browse and filter through all films</p>
      <SearchForm/>
      <FullListings/>
    </main>
</template>

<script>
import FullListings from '@/components/FullListings.vue';
import SearchForm from '@/components/SearchForm.vue';

export default {
    components: {
        FullListings,
        SearchForm
    }
}
</script>

<style>

</style>