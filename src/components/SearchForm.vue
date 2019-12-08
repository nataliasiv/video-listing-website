<template>
  <form role="search" class="search-form component">
      <input type="search" placeholder="Search for films" autofocus>
      <ButtonMain title="Search" type="submit" value="submit"/>
  </form>
</template>

<script>
import ButtonMain from '@/components/ButtonMain.vue';
// TODO: focus input on page change
export default {
    components: {
        ButtonMain
    }
}
</script>

<style lang="scss">
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
    }
}
</style>