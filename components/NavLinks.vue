<template>
    <ul class="nav-menu">
        <li v-for="(item, index) in navLinks.slice(0, 2)" :key="index" class="nav-menu__item">
            <NuxtLink class="nav-menu__link nav-menu__link--ltr" :to="item.link">
                {{ item.title }}
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/"> <LargeLogo class="header-logo" color="white" /> </NuxtLink>
        </li>
        <li v-for="(item, index) in navLinks.slice(navLinks.length - 2)" :key="index" class="nav-menu__item">
            <NuxtLink class="nav-menu__link nav-menu__link--ltr" :to="item.link">
                {{ item.title }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script>
export default {
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
        }
    },
}
</script>

<style lang="scss" scoped>
.nav {
    .header-logo {
        height: 10rem;
        @include respond(tab-port) {
            height: 8rem;
        }
        &.desktop {
            @include respond(tab-port) {
                display: none;
            }
        }
        &.mobile {
            @media only screen and(min-width: 56.25em) {
                display: none;
            }
        }
    }

    &-menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        width: 100%;
        background: transparent;
        @include respond(tab-port) {
            width: 100%;
            padding: 0 2rem;
        }
        &__item {
            align-self: center;
        }
        &__link {
            font-size: $font-size;
            display: inline-block;
            text-transform: uppercase;
            opacity: 0.8;
            transition: $transition;
            position: relative;
            padding: 15px 0;
            margin: 0 20px;
            &:link,
            &:visited {
                color: $header-font-color;
            }
            &:hover,
            &:active {
                opacity: 1;
            }

            &::before {
                transition: 300ms;
                height: 5px;
                content: '';
                position: absolute;
                background-color: $primary-color;
            }
            &.nuxt-link-exact-active::before {
                width: 100%;
            }

            &--ltr {
                &::before {
                    width: 0%;
                    bottom: 10px;
                }
                &:hover::before {
                    width: 100%;
                }
            }
        }
    }
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
    transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
}
</style>
