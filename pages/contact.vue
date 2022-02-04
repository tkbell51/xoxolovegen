<template>
    <div>
        <PageHeader title="Let's Talk" />
        <section>
            <div class="container">
                <p>{{ contact.message }}</p>
            </div>
        </section>
        <section class="section__contact-form">
            <div class="container">
                <div class="contact__form">
                    <form
                        name="contact"
                        action="/thanks"
                        method="POST"
                        netlify
                        netlify-honeypot="bot-field"
                        class="form w-2/3 mx-auto py-12 px-24"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <div class="form__group">
                            <label for="name">Your Name</label>

                            <input id="name" type="text" name="name" class="form__input" required />
                        </div>
                        <div class="form__group">
                            <label for="email">Email Address</label>

                            <input id="email" type="email" name="email" class="form__input" required />
                        </div>
                        <div class="form__group">
                            <label for="howContacted">How did you hear about me?</label>

                            <input id="howContacted" type="text" name="howContacted" class="form__input" required />
                        </div>
                        <div class="form__group">
                            <label for="message">Your Message</label>

                            <textarea id="message" rows="5" name="message" class="form__text" required />
                        </div>
                        <button type="submit" class="btn">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const contact = await $content('pages/contact').fetch()
        return {
            contact,
        }
    },
}
</script>

<style lang="scss" scoped>
.form {
    background: $primary-color;
    @apply text-base;
    &__group {
        @apply flex flex-col;
    }
    label {
        font-size: 2rem;
        color: $white;
    }
    input {
        padding: 1rem 0 1rem 2rem;
    }
    textarea {
        padding: 1rem 0 1rem 2rem;
    }
    .btn {
        background: $secondary-light;
    }
}
</style>
