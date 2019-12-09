<template>
  <main>
    <h1>Details about {{ details.title }}</h1>
    <DetailsCard :details="details"/>
  </main>
</template>

<script>
import DetailsCard from '@/components/DetailsCard.vue'
import FilmService from '@/services/FilmService.js'

export default {
  components: {
    DetailsCard
  },
  data() {
    return {
      details: []
    }
  },
  created() {
    FilmService.getDetails(this.$route.params.id)
    .then(reponse => { this.details = reponse.data })
    .catch(error => { console.log('Error' + error) })
  }
}
</script>

<style>

</style>