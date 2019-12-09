<template>
    <main>
        <div class="details">
            <h1>All Films</h1>
            <p class="details__subtitle">Browse all of the latest films in our database</p>
        </div>
        <!-- <Sort/> -->
        <FilmCard releaseMessage="Released on" scrollType="vertical"/>
    </main>
</template>

<script>
//import Sort from '@/components/Sort.vue'
import FilmCard from '@/components/FilmCard.vue'

export default {
    components: {
        // Sort,
        FilmCard
    }
}
</script>

<style>

</style>