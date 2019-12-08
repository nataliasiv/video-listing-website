<template>
  <form role="search" class="search-form component">
      <input type="search" placeholder="Search for films" autofocus>
      <input type="submit" value="Search">
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
form {
    @include flex-align(center, center);

    @include max(mobile) {
        flex-wrap: wrap;
    }

    input {
        font-size: 1.6rem;

        &[type=search] {
            width: 100%;
            max-width: 50rem;
            border: .1rem solid $color-primary;
            border-radius: .5rem;
            padding: 1.5rem;

            &:focus {
                outline: none;
            }
        }

        &[type=submit] {
            height: 5rem;
            background: $color-primary;
            color: white;
            border-radius: .5rem;
            padding: 1.5rem;
            margin-left: .5rem;
            font-weight: 400;
            transition: $base-transition;

            &:hover, &:focus {
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