<template>
    <div class="page">
        <div class="overlay"></div>
        <Header class="blog" />
        <nuxt class="content" />
        <!-- <Footer /> -->
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.blog {
    position: relative;
    background: $primary-color;
    padding: 2rem 0;
    a {
        color: $primary-color;
    }
}
</style>
