<template>
    <main>
        <div class="details">
            <h1>All Films</h1>
            <p class="details__subtitle">Browse the latest films in our database</p>
        </div>
        <FilmCard releaseMessage="Released on" scrollType="vertical"/>
    </main>
</template>

<script>
import FilmCard from '@/components/FilmCard.vue'

export default {
    components: {
        FilmCard,
    }
}
</script>

<style>

</style>