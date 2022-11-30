<template>
    <section class="card-group">
<card-preview v-for="card in 4"/>
    </section>
    
  </template>
  
  <script>
  import cardPreview from "../cmps/card-preview.vue"
  export default {
    data() {
      return {
       
      }
    },
    components:{
      cardPreview
    },
    computed: {
      
    },
    created() {
      
    },
    methods: {
      
    }
  
    
  }
  </script>
  