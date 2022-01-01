<template>
    <section class="hero">
        <div class="container h-full">
            <div class="hero__content relative">
                <LargeLogo class="hero__logo" />
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
    background: $hero-gradient, center / cover no-repeat url('../static/img/hero-bg.jpeg');
    height: 95vh;
    &__content {
        height: 100%;
        width: 100%;
    }
    &__logo {
        @include absCenter;
        z-index: 200;
        width: 70%;
    }
}
</style>
