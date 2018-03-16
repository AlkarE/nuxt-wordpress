<template>
    <div>
        {{post}}
    </div>
</template>

<script>

    export default {

        fetch({ store, params }) {
            console.log(params.slug)
            store.dispatch('getPostBySlug', params.slug)
        },
        computed: {
            post() {
                return this.$store.state.post
            }
        }
    }
</script>