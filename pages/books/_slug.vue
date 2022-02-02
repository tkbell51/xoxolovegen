<template>
    <div class="grid relative">
        <aside class="sticky">
            <nuxt-img class="w-full m-0" :src="`img/books/${book.image}`" />
        </aside>
        <div>
            <Header />
            <Footer />
        </div>
    </div>
</template>

<script>
export default {
    layout: 'book',
    async asyncData({ $content, params }) {
        const book = await $content('books', params.slug).fetch()
        return {
            book,
        }
    },
}
</script>

<style lang="scss" scoped>
.grid {
}
aside {
    height: 100vh;
}
</style>
