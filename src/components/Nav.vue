<template>
    <nav>
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'all-listings'}">All Film Listings</router-link>
    </nav>
</template>

<style lang="scss">
nav {
    display: flex;
    align-items: center;
    background: $bg-color-accent;
    min-height: $base-component-height;
    padding: 1rem $base-spacer;

    a {
        color: white;
        text-decoration: none;
        margin-right: 4rem;
        font: {
            size: map-get($heading-sizes, h4);
            weight: 400;
        }

        &:hover {
            transform: scale(1.05);
        }
    }
}
</style>