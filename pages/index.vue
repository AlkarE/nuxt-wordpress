<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <div v-html="content"></div>
        <li v-for="recentPost in recentPosts">
          <nuxt-link :to="'/news/'+recentPost.slug">{{ recentPost.title.rendered }}</nuxt-link>
        </li>

      </div>

    </v-flex>
  </v-layout>
</template>

<script>
  import HomeContent from '~/static/markdown/Home.md'
  export default {
    fetch({ store }) {
      console.log('fetch')
      store.dispatch('getPosts')
    },
    computed: {
      // allPosts() {
      //   return this.$store.state.posts
      // },
      recentPosts() {
        const limit = 4;
        return this.$store.state.posts.slice(0, limit)
      }
    },
    data() {
      return {
        content: HomeContent
      }
    }
  }
</script>