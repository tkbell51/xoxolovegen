<template>
    <article>
        <div class="post__text">
            <div class="container">
                <div class="post__top">
                    <h1 class="post__title">{{ post.title }}</h1>
                    <div class="post__meta">
                        <div class="post__avatar">
                            <!-- <img src="@/assets/img/kervin-searles.png" alt="Kervin Searles smiling" /> -->
                        </div>
                        <div>
                            <em>written by</em>

                            <p>Gee Gee Louis</p>
                        </div>
                        <div>
                            <em>posted on</em>
                            <p>{{ $formatDate(post.date) }}</p>
                        </div>
                    </div>
                </div>
                <div class="post__img">
                    <nuxt-img :src="`img/blog/${post.image}`" />
                </div>
                <div class="post__grid">
                    <div>
                        <ul class="post__social--list">
                            <li class="post__social--item">
                                <ShareNetwork
                                    class="post__social--link"
                                    network="facebook"
                                    :url="`https://xoxolovegen.come/blog/${post.slug}`"
                                    :title="post.title"
                                    :description="post.description"
                                >
                                    <Fab i="facebook" />
                                </ShareNetwork>
                            </li>

                            <li class="post__social--item">
                                <ShareNetwork
                                    class="post__social--link"
                                    network="twitter"
                                    :url="`https://xoxolovegen.come/blog/${post.slug}`"
                                    :title="post.title"
                                >
                                    <Fab i="twitter" />
                                </ShareNetwork>
                            </li>
                            <li class="post__social--item">
                                <ShareNetwork
                                    class="post__social--link"
                                    network="linkedin"
                                    :url="`https://xoxolovegen.come/blog/${post.slug}`"
                                >
                                    <Fab i="linkedin" />
                                </ShareNetwork>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <nuxt-content :document="post" />
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    layout: 'blog',
    async asyncData({ $content, params }) {
        const post = await $content('blog', params.slug).fetch()

        return {
            post,
        }
    },
}
</script>

<style lang="scss" scoped>
.post {
    &__top {
        margin-bottom: 2rem;
    }
    &__title {
        text-align: center;
        font-size: 8rem;
        @include respond(phone) {
            font-size: 4rem;
        }
    }
    &__meta {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        text-align: left;
        div {
            margin: 0 1rem;
            em {
                color: #546e7a;
                display: inline-block;
                font-size: 1.3rem;
            }
            p {
                font-size: 1.5rem;
                font-weight: bold;
                white-space: nowrap;
            }
        }
    }
    &__avatar {
        height: 55px;
        width: 55px;
        img {
            height: auto;
            width: 100%;
            border-radius: 50%;
        }
    }
    &__bg {
        height: 60rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__grid {
        width: 80%;
        margin: 4rem auto;
        display: grid;
        grid-template-columns: 8rem 1fr;
        grid-gap: 1rem;
        @include respond(phone) {
            grid-template-columns: 1fr;
            & > div:first-of-type {
                order: 2;
            }
        }
    }
    &__social {
        &--list {
            list-style: none;
            margin-top: 2rem;
            @include respond(phone) {
                display: flex;
                li {
                    margin: 1rem;
                }
            }
        }
        &--item {
            // text-align: center;
            margin-bottom: 2rem;
        }
        &--link {
            svg {
                font-size: 3rem;
                color: $primary-color;
                transition: all 0.3s ease;
            }
            &:hover svg {
                color: $secondary-color;
            }
        }
    }
    &__img {
        width: 100%;
        img {
            width: inherit;
        }
    }
}
</style>
