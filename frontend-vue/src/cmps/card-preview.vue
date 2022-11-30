<template>
    <section class="card-preview">
      <img v-if="card.imgURL" :src="getCardURL">
<h1>{{card.title}}</h1>
    </section>
    
  </template>
  
  <script>

  export default {
    props:{
    card:Object,
  },
    data() {
      return {
       
      }
    },
    computed: {
      getCardURL(){
        return this.card.imgURL
      }
    },
    created() {
      
    },
    methods: {
      
    }
  
    
  }
  </script>
  