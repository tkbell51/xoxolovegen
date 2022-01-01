<template>
    <div class="page">
        <div class="overlay"></div>
        <Header class="blog" />
        <nuxt class="main-content" />
        <Footer />
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.blog {
    position: relative;
    background: $primary-color;
    a {
        color: $primary-color;
    }
}
</style>
