<template>
	<div class="rating" v-if="rating">
		<img :src="icon" alt="Star" width="25" height="25" />
		<span>{{ rating }} / 10</span>
	</div>
</template>

<script>
import star from "@/assets/star.svg";

export default {
    data() {
		return {
			icon: star
		};
	},
	props: {
		rating: Number
	}
};
</script>

<style lang="scss">
.rating {
	display: flex;
	align-items: flex-end;
	margin-top: 1rem;

	span {
		display: block;
		font-weight: 400;
		margin-left: .8rem;
	}
}
</style>
