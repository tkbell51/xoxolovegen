<template>
    <main>
        <Hero />
        <section class="welcome">
            <div class="container">
                <SectionHeader background="Welcome" header="Welcome" />
                <div class="welcome__content flex justify-between gap-8">
                    <div class="welcome__img">
                        <nuxt-img src="/img/welcome-img.jpeg" alt="Gee Gee Louis headshot" />
                    </div>
                    <div class="welcome__text">
                        <h2 class="heading-secondary">Gee Gee Louis</h2>
                        <p>
                            {{ home.welcome }}
                        </p>
                        <NuxtLink to="/about" class="btn">Learn More</NuxtLink>
                    </div>
                </div>
            </div>
        </section>
        <section class="book">
            <div class="container">
                <SectionHeader background="My Book" header="Light Up the Darkness" />

                <div class="book__content flex justify-between gap-8">
                    <div class="book__img">
                        <nuxt-img src="/img/geegeebook.jpeg" />
                    </div>
                    <div class="book__text">
                        <p>{{ home.bookDescription }}</p>
                        <NuxtLink to="/store" class="btn">Buy Now</NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <section class="book-reviews">
            <div class="container">
                <h2 class="heading-secondary">Book Reviews</h2>
                <swiper :options="reviewOptions">
                    <swiper-slide v-for="review in home.bookReviews" :key="review.name" class="text-center">
                        <h3 class="heading-tertiary">{{ review.name }}</h3>
                        <p>{{ review.review }}</p>
                    </swiper-slide>
                    <div slot="button-prev" class="swiper-button-prev"></div>
                    <div slot="button-next" class="swiper-button-next"></div>
                </swiper>
            </div>
        </section>
        <section class="blog">
            <div class="container">
                <SectionHeader background="Blog" header="Blog" />

                <swiper :options="blogOptions">
                    <swiper-slide v-for="post in posts" :key="post.title">
                        <NuxtLink :to="`blog/${post.slug}`" class="blog__card">
                            <div v-if="post.image" class="blog__card--img">
                                <nuxt-img fit="fill" :src="`img/blog/${post.image}`" />
                            </div>
                            <div class="blog__card--text">
                                <h3 class="blog__card--title">{{ post.title }}</h3>
                                <small class="blog__card--date">{{ $formatDate(post.date) }}</small>
                                <p>{{ post.description }}</p>
                            </div>
                        </NuxtLink>
                    </swiper-slide>
                    <div slot="button-prev" class="swiper-button-prev blog"></div>
                    <div slot="button-next" class="swiper-button-next blog"></div>
                </swiper>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const home = await $content('pages/home').fetch()
        const posts = await $content('blog', { deep: true }).fetch()
        return {
            home,
            posts,
        }
    },
    data() {
        return {
            blogOptions: {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next.blog',
                    prevEl: '.swiper-button-prev.blog',
                },
            },
            reviewOptions: {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
        }
    },
}
</script>

<style lang="scss" scoped>
.welcome {
    &__img {
        width: 50rem;
        // height: 522px;
        img {
            border-radius: 5px 251px 5px 5px;
            box-shadow: -17px 17px 0 $primary-color;
        }
    }
}
.book {
    &__img {
        img {
            border-radius: 5px;
            box-shadow: 17px 17px 0 $primary-color;
        }
    }
}

.book-reviews {
    background-color: $primary-color;
    .heading-secondary {
        color: $secondary-very-light;
        text-align: center;
    }
    .swiper-button-next,
    .swiper-button-prev {
        color: $white;
    }
    h3,
    p {
        color: $white;
    }
    h3 {
        margin-bottom: 2rem;
    }
}

.blog {
    &__card {
        @apply rounded-lg flex rounded-lg;
        background: $white;
        height: 32rem;
        overflow: hidden;
        &--img {
            width: 50%;
        }
        &--text {
            padding: 4rem;
        }
        &--title {
            font-size: 2rem;
        }
        &--date {
            font-size: 1.5rem;
            color: $secondary-color;
        }
    }
}
</style>
