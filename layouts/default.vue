<template>
    <div class="page">
        <div class="overlay"></div>
        <Header />

        <Nuxt class="content" />
        <Footer />
    </div>
</template>

<script>
export default {
    head() {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        }
    },
}
</script>

<style lang="scss" scoped></style>
