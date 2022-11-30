<template>
  <header v-if="hello === '/'" class="home-page-header">
    <nav>
      <router-link to="/" class="home-logo-page">
        <img class="logo-img-home"
          src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
          alt="">
      </router-link>
      <router-link to="/login">
        <button class="login-button">Log in</button>
      </router-link>
    </nav>
  </header>
  <header v-if="hello === '/boardsPage'" class="boards-page">
    <nav>
      <div class="left-header">
        <router-link to="/">
          <img class="logo-img-board"
          src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
          alt="">
        </router-link>
        <router-link to="/boards">
          <button class="boards-header-btn">Boards</button>
        </router-link>
        <button class="create-board-btn" @click="toggleCreateModal">Create </button>
      </div>
      <div class="right-header">
        <input class="search-boards" type="text" placeholder="Search">
      </div>
    </nav>
    <section class="create-modal">

    </section>
  </header>
</template>
<script>
export default {
  data() {
    return {
      route: this.$route,
      isCreateModalOpen:false,
    }
  },
  created() {
  },
  methods:{
    toggleCreateModal(){
      this.isCreateModalOpen=!this.isCreateModalOpen
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
    hello() {
      return this.$route.path
    },
  }
}
</script>