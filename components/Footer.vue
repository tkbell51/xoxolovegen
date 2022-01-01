<template>
    <footer class="footer">
        <SmallLogo class="mx-auto" />
        <div class="footer__signup py-24">
            <div class="container">
                <div class="text-center">
                    <p class="text-7xl mb-12">Subscribe to my Newsletter</p>
                    <div>
                        <p class="text-4xl mb-8 w-2/3 mx-auto">{{ footer.formText }}</p>
                        <form
                            name="contact"
                            action="/thanks"
                            method="POST"
                            netlify
                            netlify-honeypot="bot-field"
                            class="form w-2/3"
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <div class="form__group">
                                <label for="name" class="hidden">Full Name</label>

                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    class="form__input"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
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
                            </div>

                            <div class="form__group">
                                <button type="submit" class="btn">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__instagram">
            <div class="instagram relative">
                <div class="instagram-row flex justify-center">
                    <div v-for="(img, index) in footer.instagram" :key="index" class="instagram-img">
                        <nuxt-img :src="img.image.replace('/static', '')" />
                    </div>
                    <a class="instagram__link" href="https://www.instagram.com/xoxolovegen/" target="_blank">
                        @xoxolovegen
                    </a>
                </div>
            </div>
        </div>
        <div class="footer__main py-8">
            <div class="container">
                <div class="footer__text flex justify-between items-center my-8">
                    <div class="footer__links">
                        <ul class="">
                            <li v-for="link in footerLinks.slice(0, 3)" :key="link.title">
                                <NuxtLink :to="link.link">{{ link.title }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <LargeLogo class="footer__logo mb-8" />
                        <div class="social-links flex items-center justify-center gap-8">
                            <a v-for="(social, index) in socialLinks" :key="index" :href="social.link" target="_blank">
                                <Fab :i="social.icon" />
                            </a>
                        </div>
                    </div>
                    <div class="footer__links">
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
                <div class="flex justify-between items-center">
                    <p>
                        &copy; {{ new Date().getFullYear() }} xoxolovegen. All Rights Reserved |
                        <a href="mailto:xoxolovegen@gmail.com">xoxolovegen@gmail.com</a>
                    </p>
                    <p>Website created by <a href="www.bellwebagency.com" target="_blank">Bell Web Agency</a></p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
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
    &__main {
        background: lighten($secondary-light, 20%);
        .social-links {
            svg {
                width: 3rem;
                height: 3rem;
                color: $white;
                transition: all 0.3s ease;
                &:hover {
                    color: $primary-color;
                }
            }
        }
    }
    &__signup {
        background: $primary-color;
        color: $white;
    }
    &__bottom {
        background: $black;
        color: $white;
        padding: 1rem;
    }
    &__links {
        font-size: 2rem;
    }
    &__logo {
        width: 33rem;
    }
    .form {
        @apply mx-auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: $font-size;

        &__input {
            background: transparent;
            border: 1px solid $white;
            margin: 2rem 0;
            padding: 1rem 3rem;

            &::placeholder {
                color: $white;
            }
        }
        .btn {
            background-color: $secondary-light;
        }
    }
}
.instagram {
    &__link {
        @include absCenter;
        background: $secondary-very-light;
        font-size: 2rem;
        padding: 1rem 3rem;
        transition: all 0.3s ease;
        &:hover {
            background: $secondary-light;
        }
    }
    .social-links {
        @apply mx-auto;
        color: $primary-color;
        font-size: 4rem;
        margin-bottom: 4rem;
    }
    &-img img {
        height: 25rem;
    }
}
</style>
