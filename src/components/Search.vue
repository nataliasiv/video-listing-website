<template>
    <section>
        <form role="search" class="search-form component" method="get">
            <input v-model="searchQuery" value=searchQuery type="search" placeholder="Search for films" autofocus>
            <input type="submit" value="Search">
        </form>
        <!-- use v-show -->
        <!-- <FilmCard :title="'Search results for: ' + searchQuery" releaseMessage="Original release" scrollType="horizontal"/> -->
    </section>
</template>

<script>
//import FilmCard from '@/components/FilmCard.vue';

export default {
    components: {
        //FilmCard
    },
    data() {
        return {
            searchQuery: ''
        }
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
            max-width: 60rem;
            border: .1rem solid $color-primary;
            border-radius: .5rem;
            padding: 2rem 1.5rem;

            &:focus {
                outline: none;
            }
        }
    }
}
</style>