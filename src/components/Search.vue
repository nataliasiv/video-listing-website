<template>
    <section>
        <form role="search" class="search-form component" method="get" @submit="getData()">
            <input v-model="searchQuery" value=searchQuery type="search" placeholder="Search for films" autofocus>
            <input type="submit" value="Search">
        </form>
        <!-- use v-show -->
        <FilmCard :title="'Search results for: ' + searchQuery" releaseMessage="Original release" scrollType="horizontal"/>
    </section>
</template>

<script>
import FilmCard from '@/components/FilmCard.vue';
import axios from 'axios';

export default {
    components: {
        FilmCard
    },
    data() {
        return {
            searchQuery: '',
            results: []
        }
    },
    methods: {
        getData() {
            axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=13aeb3fe065f4b10d4cacbafd800335b&page=1&include_adult=false')
            .then(reponse => { console.log(this.results = reponse.data) })
            .catch(error => { console.log('Error' + error) })
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

        &[type=submit] {
            height: 6rem;
            background: $color-primary;
            color: white;
            border-radius: .5rem;
            padding: 2rem;
            margin-left: .5rem;
            transition: $base-transition;
            font: {
                weight: 400;
                size: 1.6rem;
            }

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