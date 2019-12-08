<template>
  <div id="app">
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style lang="scss">
// TODO: SCSS formatter
body {
  color: $color-primary;
  line-height: 1.5;
  background: $bg-color-base;
  font: {
    family: 'Source Sans Pro', $fallback-fonts;
    size: 1.6rem;
    weight: 300;
  }

  .component {
    margin-top: 6rem;
  }

  main {
    margin: $base-spacer*2 auto $base-spacer*3;
    height: 100%;
    width: 75%;
    max-width: 144rem;

      a:not(.film-details) {
        text-decoration: underline;

      &:hover, &:active, &:focus {
        color: $color-secondary;
      }
    }

    p {
      margin: 1rem 0 0;
    }

    .subtitle {
      font-size: map-get($heading-sizes, h4);
      color: $text-color-secondary;
    }
  }
}
</style>
