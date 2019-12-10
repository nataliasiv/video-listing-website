<template>
	<section class="details-card">
		<WatchTrailer :video="film.videos" />
		<Poster :posterPath="film.poster_path" />
		<div class="details-card__details">
			<h3>{{ film.title }}</h3>
			<p class="details-card__subtitle details__subtitle" v-if="film.tagline">{{ film.tagline }}</p>
			<div class="details-card__genre" v-if="film.genres">
				<p v-for="genre in film.genres" :key="genre.key">{{ genre.name }}</p>
			</div>
			<p v-if="film.overview">{{ film.overview }}</p>
			<FilmRating :rating="film.vote_average" />
			<p v-if="film.release_date">Original release: {{ film.release_date }}</p>
		</div>
	</section>
</template>

<script>
import Poster from "@/components/Poster.vue";
import FilmRating from "@/components/FilmRating.vue";
import WatchTrailer from "@/components/WatchTrailer.vue";

export default {
	components: {
		Poster,
		FilmRating,
		WatchTrailer
	},
	props: {
		film: Object
	}
};
</script>

<style lang="scss">
.details-card {
	@include base-grid(6rem, 27rem 1fr);

	.poster img {
		transition: unset;
	}

	&__details {
		margin-top: 3rem;

		@include min(tablet) {
			grid-area: 1/2/3/3;
		}
	}

	&__genre {
		display: flex;
		flex-wrap: wrap;
		margin: 1rem 0 2rem;

		p {
			background: $color-accent;
			color: white;
			width: fit-content;
			padding: .5rem 1rem;
			border-radius: .5rem;
			box-shadow: $base-box-shadow;
			margin: .5rem 1rem .5rem 0;
			font: {
				weight: 400;
				size: 1.4rem;
			}
		}
	}
}
</style>