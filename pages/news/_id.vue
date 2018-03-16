<template>
    <div>
        {{post}}
    </div>
</template>

<script>

    export default {

        fetch({ store, params }) {

            store.dispatch('getPost', params.id)
        },
        computed: {
            post() {
                return this.$store.state.post
            }
        }
    }
</script>