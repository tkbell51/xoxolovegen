<template>
    <ul class="social-links flex items-center justify-center gap-8">
        <li v-for="(social, index) in socialLinks" :key="index">
            <a :href="social.link" target="_blank">
                <Fab :i="social.icon" />
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            socialLinks: [
                { icon: 'instagram', link: 'https://www.instagram.com/xoxolovegen/' },
                { icon: 'facebook', link: 'https://www.facebook.com/xoxolovegen' },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
a svg {
    color: $white;
    font-size: map-get($font-size-scale, '600');
}
</style>
