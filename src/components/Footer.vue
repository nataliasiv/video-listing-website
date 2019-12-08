<template>
  <footer>
      <p>Developed by Natalia Sivackova for TenTwenty</p>
      <ul>
          <li><span>Email:</span><a href="mailto:n.sivackova@gmail.com">n.sivackova@gmail.com</a></li>
          <li><span>Tel:</span>+356 99 763 953</li>
      </ul>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
footer {
    background: $color-tertiary;
    color: white;
    font-size: 1.2rem;
    padding: 1rem $base-spacer;

    @include min(tablet) {
        @include flex-align(center, space-between);
        min-height: $base-component-height;
    }

    ul {
        margin-top: 1rem;

        @include min(tablet) {
            display: flex;
            margin: unset;
        }

        li:first-of-type {
            margin-right: $base-spacer;
        }

        a {
            color: inherit;

            &:hover, &:active, &:focus {
                text-decoration: underline;
            }
        }

        span {
            font-weight: 400;
            margin-right: .5rem;
        }
    }
}
</style>