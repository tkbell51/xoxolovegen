<template>
    <div class="section-header">
        <div class="relative">
            <h3 class="text-background">{{ background }}</h3>
            <h2 class="heading-secondary">{{ header }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        background: {
            type: String,
            default: '',
        },
        header: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss" scoped>
.section-header {
    position: relative;
    .text-background {
        color: rgba($secondary-color, 0.2);
        font-size: clamp(6rem, 15vw, 25rem);
        text-align: center;
        white-space: nowrap;
        z-index: -1;
        font-family: 'Parisienne';
        /* @include respond(tab-small) {
            display: none;
        } */
    }
    .heading-secondary {
        @include absCenter;
        z-index: 1;
        text-align: center;
        display: inline-block;
        white-space: nowrap;
        font-family: 'Simonetta';
        font-weight: bold;
    }
}
</style>
