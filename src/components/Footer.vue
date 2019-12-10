<template>
	<footer>
		<p>Developed by Natalia Sivackova for TenTwenty</p>
		<p>
			<span>Email:</span>
			<a href="mailto:n.sivackova@gmail.com">n.sivackova@gmail.com</a>
		</p>
	</footer>
</template>

<style lang="scss">
footer {
    background: $color-tertiary;
	color: white;
	font-size: 1.2rem;
	padding: 1rem 2rem;

	@include min(tablet) {
		@include flex-align(center, space-between);
		min-height: $base-component-height;
	}

	a {
		color: inherit;

		&:hover,
		&:active,
		&:focus {
			text-decoration: underline;
		}
	}

	span {
		font-weight: 400;
		margin-right: .5rem;
	}
}
</style>