<template>
	<main>
		<h1>Details about {{ film.title }}</h1>
		<DetailsCard :film="film" />
	</main>
</template>

<script>
import DetailsCard from "@/components/DetailsCard.vue";
import FilmService from "@/services/FilmService.js";

export default {
	components: {
		DetailsCard
	},
	data() {
		return {
			film: {}
		};
	},
	created() {
		FilmService.getDetails(this.$route.params.id)
			.then(reponse => {
				this.film = reponse.data;
			})
			.catch(error => {
				console.log("Error" + error);
			});
	}
};
</script>