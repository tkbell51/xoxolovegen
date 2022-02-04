<template>
    <div class="hero">
        <div class="container h-full">
            <div class="hero__content">
                <div class="hero__content--text">
                    <h1 class="heading-primary">My Words.</h1>
                    <h1 class="heading-primary text-center">My Heart.</h1>
                    <h1 class="heading-primary text-right">In My Way.</h1>
                </div>
                <div class="hero__content--profile">
                    <nuxt-img width="600" src="/img/welcome-img.jpeg" alt="Gee Gee Louis headshot" />
                </div>
                <p class="hero__content--welcome">{{ text }}</p>
            </div>
        </div>
        <PieceTicker />
    </div>
</template>

<script>
export default {
    props: ['text'],
}
</script>

<style lang="scss" scoped>
.hero {
    background: $black;
    height: 50rem;
    /* width: 100%; */
    position: relative;
    &__content {
        height: 100%;
        width: 100%;

        &--text {
            position: relative;
            z-index: 100;
            padding-top: 5rem;
            color: $white;
        }
        &--profile {
            @include absCenter;
            left: 60%;
        }
        &--welcome {
            color: $secondary-very-light;
            width: 30%;
            font-size: map-get($font-size-scale, '600');
        }
    }

    @include respond(tab-port) {
        height: 65vh;
    }
    @include respond(tab-small) {
        height: 40vh;
    }
}
</style>
