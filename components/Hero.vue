<template>
    <section class="hero">
        <div class="container h-full">
            <div class="hero__content flex items-center">
                <h1 class="heading-primary text-center">{{ text }}</h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['text'],
}
</script>

<style lang="scss" scoped>
.hero {
    background: $hero-gradient, center / cover no-repeat url('../static/img/hero-bg.jpeg');
    height: 75vh;
    width: 100%;
    &__content {
        height: 100%;
        width: 100%;
    }

    @include respond(tab-port) {
        height: 65vh;
    }
    @include respond(tab-small) {
        height: 40vh;
    }
}
</style>
