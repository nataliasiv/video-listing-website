<template>
	<div id="app">
		<Nav />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
	components: {
		Nav,
		Footer
	}
};
</script>

<style lang="scss">
// Import reset style
@import "@/scss/_reset.scss";

body {
	color: $color-primary;
	line-height: 1.6;
	background: $bg-color-base;
	font: {
		family: "Source Sans Pro", $fallback-fonts;
		size: 1.6rem;
		weight: 300;
	}

	@each $heading in h1, h2, h3, h4, h5, h6 {
		#{$heading } {
			margin: 0;
			font: {
				weight: 400;
				size: map-get($heading-sizes, $heading);
			}
		}
	}

	.component {
		margin-top: 6rem;

		h2 {
			@include min(tablet) {
				margin-bottom: 1.5rem;
			}
		}
	}

	main {
		margin: 5rem auto 6rem;
		width: 75%;
		max-width: 144rem;

		a:not(.film-card) {
			text-decoration: underline;

			&:hover,
			&:active,
			&:focus {
				color: $color-secondary;
			}
		}

		p {
			margin: 1rem 0 0;
		}

		.details__subtitle {
			font-size: map-get($heading-sizes, h4);
			color: $text-color-secondary;
		}

		input[type="submit"],
		button {
			height: 6rem;
			background: $color-primary;
			color: white;
			border-radius: 0.5rem;
			padding: 2rem;
			margin-left: 0.5rem;
			transition: $base-transition;
			font: {
				weight: 400;
				size: 1.6rem;
			}

			&:hover,
			&:focus {
				background: $color-secondary;
			}

			@include max(mobile) {
				width: 100%;
				margin: 1rem 0 0;
			}
		}
	}
}
</style>
