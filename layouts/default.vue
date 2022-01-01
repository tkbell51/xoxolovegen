<template>
    <div class="page">
        <div class="overlay"></div>
        <Header />

        <Nuxt class="content" />
        <Footer />
    </div>
</template>

<script>
export default {
    head() {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        }
    },
}
</script>

<style lang="scss">
html {
    font-size: 62.5%;
    @include respond(tab-land) {
        font-size: 60%;
    }
    @include respond(tab-port) {
        font-size: 65%;
    }
    @include respond(big-desktop) {
        font-size: 75%;
    }
}
body {
    position: relative;
    line-height: 1.6;
    background: $bg-color;
    font-family: 'Simonetta';
}
.page {
    display: grid;
    grid-template-areas:
        'content'
        'footer';
    grid-template-rows: 1fr auto;
    // grid-gap: 10px;
    height: 100vh;

    .header {
        grid-area: content;
    }
    .footer {
        grid-area: footer;
    }
    .content {
        grid-area: content;
        @include respond(tab-port) {
            margin-top: 5rem;
        }
    }
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: rgba($black, 0.8);
        opacity: 0;
        visibility: hidden;
        &.show {
            opacity: 0.8;
            visibility: visible;
        }
    }
}
::selection {
    background-color: $primary-color !important;
    color: $white;
}
.container {
    @apply mx-auto px-48;
    @include respond(phone) {
        padding: 0 3rem;
    }
}

.heading-primary {
    color: $white;
    display: block;
    font-size: clamp(5rem, 8vw, 9rem);
    text-transform: uppercase;
    line-height: 1;
    @include respond(tab-port) {
        letter-spacing: 0.2rem;
        font-size: 4rem;
        line-height: 4.2rem;
    }
}
.heading-secondary {
    font-size: clamp(3.2rem, 6vw, 5rem);
    color: $primary-color;
    text-transform: uppercase;
    line-height: 1.25;
    margin-bottom: 3rem;
}
.heading-tertiary {
    @apply uppercase;
    font-size: clamp(2rem, 3vw, 3rem);
    line-height: 1.2;
}

.btn {
    @apply text-white font-bold;
    background: $primary-color;
    font-size: $font-size;
    border-radius: 3px;
    margin: 2rem 0;
    display: inline-block;
    text-align: center;

    // background: darken($secondary-color, 5%);
    // box-shadow: $box-shadow;
    border: 1px solid $primary-color;

    padding: 1rem 3rem;

    text-transform: uppercase;
    text-decoration: none;
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    will-change: transform;
    &:hover {
        background: darken($primary-color, 10%);
        box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
        transform: translate3d(0, -2px, 0);
    }
    &:active {
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
        transform: translate3d(0, 1px, 0);
    }
    &.btn-transparent {
        background: transparent;
        border: 1px solid $white;
        &:hover {
            background: darken($primary-color, 5%);
            border: 1px solid darken($primary-color, 5%);
        }
    }

    @include respond(tab-port) {
        height: 35;
    }
}

section {
    position: relative;
    padding: 8rem 0;
    @include respond(phone) {
        padding: 3rem 0;
    }
}

p {
    font-size: $font-size;
}
</style>
