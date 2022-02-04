<template>
    <main>
        <Hero :text="home.welcome" />
        <!-- <section class="welcome">
            <div class="container">
                <div class="welcome__text text-center lg:w-1/2 mx-auto">
                    <p class="text-5xl text-white">
                        {{ home.welcome }}
                    </p>
                </div>
                <div>
                    <NuxtLink to="/writer"></NuxtLink>
                    <NuxtLink to="/speaker"></NuxtLink>
                </div>
            </div>
        </section> -->
        <section class="about">
            <div class="container">
                <div class="about__content flex justify-between">
                    <div class="about__img">
                        <nuxt-img src="/img/welcome-img.jpeg" alt="Gee Gee Louis headshot" />
                    </div>
                    <div class="about__text w-1/2 mt-24">
                        <h2 class="heading-secondary">Hi, I'm Gen</h2>
                        <p>
                            {{ home.bioShort }}
                        </p>
                        <NuxtLink to="/about" class="btn">Learn More</NuxtLink>
                    </div>
                </div>
            </div>
        </section>
        <section class="services">
            <div class="container">
                <h2 class="heading-secondary text-center">What I Do</h2>
                <div class="services__row">
                    <div class="services__card">Writer</div>
                    <div class="services__card">Creative speaker</div>
                    <div class="services__card">Writing Consultant</div>
                </div>
            </div>
        </section>
        <section class="book">
            <div class="container">
                <SectionHeader background="My Book" header="Light Up the Darkness" />

                <div class="book__content flex justify-between">
                    <div class="book__img w-full lg:w-1/2">
                        <nuxt-img src="/img/book.jpg" />
                    </div>
                    <div class="book__text w-full lg:w-1/2">
                        <p>{{ home.bookDescription }}</p>
                        <!-- <NuxtLink to="/store" class="btn">Buy Now</NuxtLink> -->
                        <a
                            href="https://www.amazon.com/Light-Up-Darkness-Gee-Louis-ebook/dp/B07VVMD6JP/ref=sr_1_1?crid=J8O04XVC80JM&keywords=light+up+the+darkness+gee&qid=1642516530&sprefix=light+up+the+darkness+gee%2Caps%2C63&sr=8-1"
                            class="btn"
                            target="_blank"
                        >
                            Buy Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="book-reviews">
            <div class="container relative">
                <client-only>
                    <agile :fade="true" :autoplay="true" :autoplay-speed="10000">
                        <div v-for="review in home.bookReviews" :key="review.name" class="slide">
                            <div class="w-full xl:w-2/3 mx-auto">
                                <p class="book-reviews__text text-3xl">{{ review.review }}</p>
                                <h3 class="heading-tertiary">- {{ review.name }}</h3>
                            </div>
                        </div>
                    </agile>
                </client-only>
            </div>
        </section>
        <section class="book-reviews__mobile">
            <div class="container">
                <h2 class="heading-secondary text-center">Book Reviews</h2>
                <div v-for="review in home.bookReviews" :key="review.name" class="book-reviews__card">
                    <p class="book-reviews__text text-3xl">{{ review.review }}</p>
                    <h3 class="heading-tertiary">- {{ review.name }}</h3>
                </div>
            </div>
        </section>
        <section class="blog">
            <div class="container">
                <SectionHeader background="Blog" header="Blog" />
                <div class="grid gap-8">
                    <NuxtLink v-for="post in posts" :key="post.title" :to="`blog/${post.slug}`" class="blog__card">
                        <div v-if="post.image" class="blog__card--img">
                            <nuxt-img height="480" width="480" :src="`img/blog/${post.image}`" />
                        </div>
                        <div class="blog__card--text">
                            <h3 class="blog__card--title">{{ post.title }}</h3>
                            <small class="blog__card--date">{{ $formatDate(post.date) }}</small>
                            <!-- <p>{{ post.description }}</p> -->
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const home = await $content('pages/home').fetch()
        const posts = await $content('blog', { deep: true }).only(['slug', 'image', 'title', 'date']).limit(3).fetch()
        return {
            home,
            posts,
        }
    },
    data() {
        return {
            reviewOptions: {},
        }
    },
}
</script>

<style lang="scss" scoped>
.welcome {
    background: $primary-color;
}
.about {
    &__content {
        gap: 8rem;
        @include respond(tab-port) {
            @apply flex-col;
        }
    }
    &__img {
        width: 500px;
        /* height: 522px; */
        img {
            border-radius: 5px 251px 5px 5px;
            box-shadow: -17px 17px 0 $primary-color;
        }
    }
    &__text {
        @include respond(tab-port) {
            @apply w-full mt-4;
        }
    }
}
.services {
    &__row {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        height: 20rem;
        @include respond(tab-port) {
            @apply flex-col;
        }
    }
    &__card {
        @apply text-5xl text-white shadow flex justify-center items-center text-center rounded;
        background-color: $primary-color;
        margin: 0 auto;
        width: 30rem;
        @include respond(tab-port) {
            height: 20rem;
        }
    }
}
.book {
    &__content {
        gap: 8rem;
        @include respond(tab-port) {
            @apply flex-col;
        }
    }
    &__img {
        img {
            border-radius: 5px;
            /* box-shadow: 17px 17px 0 $primary-color; */
        }
    }
}

.book-reviews {
    background-color: $primary-color;
    color: $white;
    text-align: center;
    @include respond(tab-small) {
        display: none;
    }
    p {
        font-size: 1.8rem;
        line-height: 1.7;
        margin-bottom: 1rem;
    }
    .agile {
        &__nav-button {
        }
    }
    &__mobile {
        display: none;
        @include respond(tab-small) {
            display: block;
        }
    }
    &__card {
        @apply bg-white p-8 my-8 rounded-lg;
    }
}

.blog {
    .grid {
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    }
    &__card {
        @apply rounded-lg flex rounded-lg relative;
        background: $white;
        height: 32rem;
        overflow: hidden;
        transition: all 0.3s ease;

        &--img {
            transform: scale(1.2);
            transition: all 0.3s ease;
        }
        &--text {
            background-color: rgba($black, 0.7);
            height: 100%;
            width: 100%;
            @include absCenter;
            @apply text-center text-white flex justify-center items-center flex-col;
            visiblity: visible;
            opacity: 1;
            transition: all 0.3s ease;
        }
        &--title {
            font-size: 3rem;
            font-weight: bold;
        }
        &--date {
            font-size: 2rem;
            color: $secondary-very-light;
            font-weight: bold;
        }

        &:hover {
            .blog__card--text {
                visibility: hidden;
                opacity: 0;
            }
            .blog__card--img {
                transform: scale(1);
            }
        }
    }
}
</style>
