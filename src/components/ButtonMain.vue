<template>
    <button :type="type" :value="value">{{ title }}</button>
</template>

<script>
export default {
    props: {
        title: String,
        type: String,
        value: String
    },
}
</script>

<style lang="scss">
main button {
    height: 5rem;
    background: $color-primary;
    color: white;
    border-radius: .5rem;
    box-shadow: $base-box-shadow;
    padding: 1.5rem;
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
</style>