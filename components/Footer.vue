<template>
    <footer class="footer">
        <section class="footer__instagram">
            <div class="container">
                <SectionHeader background="Instagram" header="@xoxolovegen" />
                <div class="instagram relative">
                    <a
                        class="instagram__link grid grid-cols-2 md:grid-cols-4 md:gap-4"
                        href="https://www.instagram.com/xoxolovegen/"
                        target="_blank"
                    >
                        <div v-for="(img, index) in footer.instagram" :key="index" class="instagram-img">
                            <nuxt-img :src="img.image.replace('/static', '')" />
                        </div>
                        <div class="instagram__link--overlay"></div>
                        <div class="instagram__link--btn"><Fab i="instagram" /></div>
                    </a>
                </div>
            </div>
        </section>
        <div class="footer__signup py-24">
            <div class="container">
                <div class="footer__signup--container flex flex-col md:flex-row justify-between">
                    <p class="text-7xl mb-12">Subscribe to my Newsletter</p>
                    <div>
                        <p class="text-4xl mb-8 md:w-2/3 mx-auto">{{ footer.formText }}</p>
                        <form
                            name="newsletter"
                            action="/thanks"
                            method="POST"
                            netlify
                            netlify-honeypot="bot-field"
                            class="form md:w-2/3"
                        >
                            <input type="hidden" name="form-name" value="newsletter" />

                            <div class="form__group">
                                <label for="email" class="hidden">Email Address</label>

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    class="form__input"
                                    placeholder="Email Address"
                                    required
                                />

                                <button type="submit" class="btn">
                                    <svg
                                        id="Group_32"
                                        data-name="Group 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14.138"
                                        height="14.138"
                                        viewBox="0 0 14.138 14.138"
                                    >
                                        <path
                                            id="Path_26"
                                            data-name="Path 26"
                                            d="M7.746,13.91a.634.634,0,0,1-.572.352.762.762,0,0,1-.15-.02.635.635,0,0,1-.492-.623V7.835H.748A.643.643,0,0,1,.457,6.62L13.309.194A.593.593,0,0,1,13.6.124a.605.605,0,0,1,.452.19.624.624,0,0,1,.12.743Z"
                                            transform="translate(-0.107 -0.124)"
                                            fill="#fff"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__main py-8">
            <div class="container">
                <div class="footer__text flex justify-center md:justify-between items-center my-8">
                    <div class="footer__links hidden md:block">
                        <ul class="">
                            <li v-for="link in footerLinks.slice(0, 3)" :key="link.title">
                                <NuxtLink :to="link.link">{{ link.title }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="mx-auto">
                        <LargeLogo :color="logoColor" class="footer__logo mb-8" />
                        <div class="social-links flex items-center justify-center gap-8">
                            <a v-for="(social, index) in socialLinks" :key="index" :href="social.link" target="_blank">
                                <Fab :i="social.icon" />
                            </a>
                        </div>
                    </div>
                    <div class="footer__links hidden md:block">
                        <ul class="">
                            <li
                                v-for="link in footerLinks.slice(Math.max(footerLinks.length - 3, 0))"
                                :key="link.title"
                            >
                                <NuxtLink :to="link.link">{{ link.title }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container">
                <div class="flex flex-col md:flex-row justify-center items-center md:divide-x-2">
                    <p class="px-4">&copy; {{ new Date().getFullYear() }} xoxolovegen. All Rights Reserved</p>
                    <p class="px-4">
                        Website created by <a href="www.bellwebagency.com" target="_blank">Bell Web Agency</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            logoColor: '#B56933',
            footer: {},
            footerLinks: [
                {
                    title: 'Home',
                    link: '/',
                },
                { title: 'About', link: '/about' },

                {
                    title: 'Projects',
                    link: '/projects',
                },
                { title: 'Blog', link: '/blog' },
                { title: 'Shop', link: '/shop' },
                { title: 'Contact', link: '/contact' },

                // { title: "Blog", link: "/blog", external: false },
            ],
            socialLinks: [
                { icon: 'instagram', link: 'https://www.instagram.com/xoxolovegen/' },
                { icon: 'facebook', link: 'https://www.facebook.com/xoxolovegen' },
            ],
        }
    },
    async fetch() {
        this.footer = await this.$content('footer').fetch()
    },
}
</script>

<style lang="scss" scoped>
.footer {
    &__logo {
        fill: $secondary-color;
    }
    &__main {
        /* background: $primary-dark; */
        .social-links {
            svg {
                width: 3rem;
                height: 3rem;
                color: $secondary-color;
                transition: all 0.3s ease;
                &:hover {
                    color: $secondary-light;
                }
            }
        }
    }
    &__signup {
        &--container {
            @apply rounded-lg;
            background: $primary-color;
            color: $white;
            padding: 4rem 4rem;
        }
    }
    &__bottom {
        background: $black;
        color: $white;
        padding: 1rem;
    }
    &__links {
        font-size: 2rem;
        /* color: $white; */
    }
    &__logo {
        width: 33rem;
    }
    .form {
        @apply mx-auto;

        font-size: $font-size;
        &__group {
            border-bottom: 1px solid $white;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__input {
            background: transparent;
            padding-left: 1rem;
            width: 100%;
            &::placeholder {
                color: $white;
            }
        }
        .btn {
        }
    }
}
.instagram {
    &__link {
        &--btn {
            @include absCenter;
            background: $primary-dark;
            color: $white;
            font-size: 2rem;
            padding: 1rem 3rem;
            transition: all 0.3s ease;
            z-index: 11;
            &:hover {
                top: 48%;
            }
        }
        &--overlay {
            @include absCenter;
            height: 100%;
            width: 100%;
            opacity: 0;
            background: rgba(0, 0, 0, 0.4);
            z-index: 10;
            transition: all 0.3s ease;
        }
        &:hover {
            .instagram__link--overlay {
                opacity: 1;
            }
            .instagram__link--btn {
                background: $secondary-light;
            }
        }
    }

    &-img {
        img {
            height: 25rem;
        }
    }
}
</style>
