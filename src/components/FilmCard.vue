<template>
	<div class="component">
		<h2>{{ title }}</h2>
		<section class="film-cards" :scrollType="scrollType">
			<router-link
				class="film-card"
				v-for="film in films"
				:key="film.id"
				:to="{name: 'listing-details', params: { id: film.id }}"
			>
				<Poster :posterPath="film.poster_path" />
				<h3>{{ film.title }}</h3>
				<FilmRating :rating="film.vote_average" />
				<p
					class="film-card__release-date"
					v-if="film.release_date"
				>{{ releaseMessage }}: {{ film.release_date }}</p>
			</router-link>
		</section>
	</div>
</template>

<script>
import Poster from "@/components/Poster.vue";
import FilmRating from "@/components/FilmRating.vue";
import FilmService from "@/services/FilmService.js";

export default {
	components: {
		Poster,
		FilmRating
	},
	data() {
		return {
			films: []
		};
	},
	props: {
		title: String,
		releaseMessage: String,
		scrollType: String,
		sort: String
	},
	created() {
		FilmService.getRecent()
			.then(reponse => {
				this.films = reponse.data.results;
			})
			.catch(error => {
				console.log(error);
			});
	}
};
</script>

<style lang="scss">
.film-cards {

	&[scrolltype="vertical"] {
		@include base-grid(3rem, repeat(3, 1fr));
		align-items: center;

		.film-card {
			align-self: flex-start;
		}
	}

	&[scrolltype="horizontal"] {

		@include min(tablet) {
			display: flex;
			overflow: scroll;
			// Transforming the cards to get the scrollbar on top
			// (Makes the horizontal scroll a bit more user friendly)
			transform: rotateX(180deg);

			.film-card {
				padding-right: 4rem;
				min-width: 27rem;
				transform: rotateX(180deg);
			}
		}
	}

	.film-card {
	@include flex-direction(column);

		h3 {
			margin-top: 2rem;
		}

		&__release-date {
			margin-top: 2rem;
			color: $text-color-secondary;
		}
	}
}
</style>
