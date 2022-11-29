<template>
  <header>
    <nav>
      <router-link to="/">
        <span role="img" aria-label="logo">🙏</span>
      </router-link>
      <router-link to="/boardsPage">board app</router-link>
      <router-link to="/boardsPage">boards</router-link>
      <router-link to="/">home</router-link>
      <router-link to="/login">Login / Signup</router-link>
    </nav>
    {{hello}}
    <section class="loggedin-user" v-if="loggedInUser">
      <router-link :to="`/user/${loggedInUser._id}`">
        {{ loggedInUser.fullname }}
      </router-link>
      <span>{{ loggedInUser.score.toLocaleString() }}</span>
    </section>
  </header>
</template>
<script>
export default {
  data(){
return {
  route:this.$route
}
  },
  created(){
// console.log(`this.$route = `, this.$route)
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
    hello(){

      console.log(`this.$route = `, this.$route.path)
    },
  }
}
</script>