<template>
    <div>
        <PageHeader title="Blog" />
        <div class="blog__slider">
            <div class="container">
                <client-only>
                    <agile :fade="true" :autoplay="true" :autoplay-speed="10000">
                        <div v-for="post in posts" :key="post.title" class="slide">
                            <div class="flex justify-between items-center pr-12">
                                <div class="flex items-center gap-12">
                                    <nuxt-img
                                        height="80"
                                        width="80"
                                        class="rounded-full"
                                        :src="`img/blog/${post.image}`"
                                    />
                                    <p class="book-reviews__text text-3xl">{{ post.title }}</p>
                                </div>
                                <NuxtLink :to="`blog/${post.slug}`">Read More</NuxtLink>
                            </div>
                        </div>
                    </agile>
                </client-only>
            </div>
        </div>
        <section class="blog__main">
            <div class="container">
                <div class="blog__main--container gap-16">
                    <div class="blog__posts">
                        <div v-for="post in posts" :key="post.title">
                            <div class="blog__card mb-12">
                                <NuxtLink :to="`blog/${post.slug}`">
                                    <h2 class="blog__card--title">{{ post.title }}</h2>
                                </NuxtLink>
                                <small class="blog__card--date">{{ $formatDate(post.date) }}</small>

                                <NuxtLink :to="`blog/${post.slug}`">
                                    <nuxt-img height="675" width="1200" class="my-8" :src="`img/blog/${post.image}`" />
                                </NuxtLink>
                                <p>{{ post.description }}</p>
                                <NuxtLink :to="`blog/${post.slug}`">Read More</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="blog__about">
                        <div class="blog__social">
                            <h3>Stay Connected</h3>
                        </div>
                        <div class="blog__profile">
                            <h3>Gee Gee</h3>
                            <nuxt-img width="215" src="/img/welcome-img.jpeg" alt="Gee Gee Louis headshot" />
                            <p>description</p>
                            <NuxtLink to="/about">Learn More</NuxtLink>
                        </div>
                        <div class="blog__subscribe">
                            <div class="footer__signup--container">
                                <h3 class="mb-12">Subscribe to my Newsletter</h3>
                                <div>
                                    <p class="text-4xl mb-8 md:w-2/3 mx-auto"></p>
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
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const posts = await $content('blog', { deep: true }).only(['slug', 'image', 'title', 'date']).fetch()
        return {
            posts,
        }
    },
    data() {
        return {
            reviewOptions: {},
        }
    },
    computed: {
        mustRead() {
            return this.posts.filter((p) => p.mustRead === true)
        },
    },
}
</script>

<style lang="scss" scoped>
.blog {
    &__main {
        &--container {
            @apply grid grid-cols-3;
        }
    }
    &__card {
        &--title {
            font-size: 4rem;
        }
    }
    &__posts {
        @apply col-span-2;
    }
    &__about {
        @apply col-span-1;
    }
}
.agile {
    @apply flex items-center;
}
</style>
