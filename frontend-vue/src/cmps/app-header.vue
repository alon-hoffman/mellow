<template>
  <header v-if="hello==='/'" class="home-header">
    <nav>
      <router-link to="/">
        <img class="logo-img-home" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg" alt="">
      </router-link>
     
      <router-link to="/boards">Board app</router-link>
      <router-link to="/boardsPage">Mellow</router-link>
      <router-link to="/">home</router-link>
      <router-link to="/login">Login / Signup</router-link>
    </nav>
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
return this.$route.path
    },
  }
}
</script>