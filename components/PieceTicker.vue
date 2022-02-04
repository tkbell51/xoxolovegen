<template>
    <div class="wrapper">
        <div class="marquee">
            <p>
                I love you like childhood playground crushes, Like nights of rainstorms that ease my fears And
                storybook, endings that bring, Even the emotionless to tears, I love you, But I don't know you, And
                although I have yet to even meet you, I know that when you arrive in my life, It will be perfection,
            </p>
            <p>
                I love you like childhood playground crushes, Like nights of rainstorms that ease my fears And
                storybook, endings that bring, Even the emotionless to tears, I love you, But I don't know you, And
                although I have yet to even meet you, I know that when you arrive in my life, It will be perfection,
            </p>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
    max-width: 100vw;
    overflow: hidden;
    background: $black;
}

.marquee {
    @apply py-4;
    color: $white;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: marquee 50s linear infinite;
    border-top: 1px solid $primary-color;
    border-bottom: 1px solid $primary-color;
}

.marquee p {
    display: inline-block;
}

@keyframes marquee {
    0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-50%, 0, 0);
    }
}
</style>
