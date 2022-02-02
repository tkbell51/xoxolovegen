<template>
    <main>
        <PageHeader title="About Me" />
        <section class="section__about">
            <div class="container">
                <!-- <nuxt-img height="400" src="img/elephant.jpeg" /> -->
                <p>{{ about.aboutFull }}</p>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const about = await $content('pages/about').fetch()
        return {
            about,
        }
    },
}
</script>

<style lang="scss" scoped></style>
