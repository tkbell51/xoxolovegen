<template>
    <div class="page-header">
        <div class="container">
            <h1 class="heading-primary">{{ title }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title'],
}
</script>

<style lang="scss" scoped>
.page-header {
    background: $hero-gradient, center / cover no-repeat url('../static/img/elephant.jpeg');
    height: 40rem;
    display: flex;
    align-items: center;
    h1 {
        margin-top: 10rem;
    }
}
</style>
