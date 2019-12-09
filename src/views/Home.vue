<template>
  <main>
    <div class="details">
      <h1>Film Listings</h1>
      <p class="details__subtitle">Don't know what to watch next? Browse or search below!</p>
    </div>
    <Search/>
    <FilmCard title="Browse Through Recent Films" releaseMessage="Released on" scrollType="horizontal"/>
  </main>
</template>

<script>
import Search from '@/components/Search.vue'
import FilmCard from '@/components/FilmCard.vue'

export default {
  components: {
    Search,
    FilmCard
  }
}
</script>

<style lang="scss">
.details {
  text-align: center;
}
</style>
