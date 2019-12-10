<template>
	<div class="poster" :animate="animate">
		<!-- Decided to use the 500w posters here because the image is sharper -->
		<!-- For a small-scale site like this one it shouldn't cause performance issues, but for larger sites I would consider other options (lazy loading or smaller images) -->
		<img
			class="poster__img"
			v-if="posterPath"
			:src="'https://image.tmdb.org/t/p/w500' + posterPath"
			alt="Film poster"
			width="300"
		/>
		<!-- Backup image in case there is no poster -->
		<img
			class="poster__img--default"
			v-else
			:src="img"
			alt="No film poster"
			width="150"
			height="150"
		/>
	</div>
</template>

<script>
import lens from "@/assets/lens.svg";

export default {
	data() {
		return {
      img: lens,
		};
	},
	props: {
    posterPath: String,
    animate: String
	}
};
</script>

<style lang="scss">
.poster {
	@include flex-align(center, center);
	min-height: 30rem; // For default poster image
	max-height: 37rem;
	max-width: 27rem;
	background: $bg-color-alt;
	overflow: hidden;
	border-radius: $img-border-radius;
	box-shadow: $base-box-shadow;
	margin-top: 3rem;
	
	&[animate="animate"] {
		animation: squish .5s .5s 2;

		@keyframes squish {
		50% {
			transform: rotateY(30deg) scale(.98);
		}
		}
	}

	img {
		transition: $base-transition;
	}

	&__img {
		border-radius: $img-border-radius;
		width: 100%;
		object-fit: cover;
	}
}

.film-card:hover {
	.poster__img {
		transform: scale(1.1);

		&--default {
			transform: scale(1.8) rotate(50deg);
		}
	}
}
</style>