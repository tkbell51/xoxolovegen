<template>
    <div v-if="showNav" class="mobile-nav">
        <div class="mobile-nav__logo" @click="closeMenu">
            <nuxt-link to="/" class="logo">
                <LargeLogo />
            </nuxt-link>
        </div>

        <ul class="mobile-nav__menu">
            <div v-for="(item, index) in navLinks" :key="index">
                <li v-if="item.submenu != undefined" class="mobile-nav__item">
                    <HeaderDropdown :links="item.submenu" />
                </li>
                <li v-else @click="closeMenu">
                    <a
                        v-if="item.external === true"
                        class="mobile-nav__link mobile-nav__link--ltr"
                        target="_blank"
                        :href="item.link"
                    >
                        {{ item.title }}
                    </a>
                    <NuxtLink v-else class="mobile-nav__link mobile-nav__link--ltr" :to="item.link">
                        {{ item.title }}
                    </NuxtLink>
                </li>
            </div>
        </ul>

        <div class="mobile-nav__social flex justify-around items-center my-8">
            <a
                v-for="(item, index) in socialLinks"
                :key="index"
                class="mobile-nav__item"
                :href="item.link"
                target="_blank"
            >
                <Fab class="mobile-nav__icon" :i="item.icon" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['showNav'],
    data() {
        return {
            navLinks: [
                {
                    title: 'Home',
                    link: '/',
                },
                { title: 'About', link: '/about' },

                { title: 'Blog', link: '/blog' },
                { title: 'Contact', link: '/contact' },

                // { title: "Blog", link: "/blog", external: false },
            ],
            socialLinks: [
                { icon: 'instagram', link: 'https://www.instagram.com/xoxolovegen/' },
                { icon: 'facebook', link: 'https://www.facebook.com/xoxolovegen' },
            ],
        }
    },
    methods: {
        closeMenu() {
            this.$parent.toggleMenu()
        },
    },
}
</script>

<style lang="scss" scoped>
.mobile-nav {
    position: fixed;
    background: $primary-color;
    z-index: 9;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 515px;
    width: 100%;
    padding-top: 5rem;
    overflow-y: auto;
    .logo {
        display: block;
        width: 13rem;
        margin: 0 auto;
    }
    &__menu {
        // display: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    &__link {
        &,
        &:link,
        &:visited {
            text-decoration: none;
            @apply text-base;
            color: $white;
            display: block;
            text-align: left;
            padding: 2rem 4rem;
        }
        &:hover,
        &:focus {
            background: $primary-color;
        }
    }
    &__link &__cta {
        margin-bottom: 0;
    }

    &__icon {
        font-size: 4rem;
        color: $white;
        &:hover,
        &:focus {
            background: $primary-color;
        }
    }
}
</style>
