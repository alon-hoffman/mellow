<template>
  <!-- <div class="card-group-wrapper"> -->
    <section class="card-group">
      <input class="group-title" type="text" v-model="title" />
<card-preview v-for="card in 4" @click="$emit('cardEdit', card._id)"/>
<button class="add-card" @click="$emit('cardEdit')">+ Add a card</button>
    </section>
  <!-- </div> -->
  </template>
  
  <script>
  import cardPreview from "../cmps/card-preview.vue"
  export default {
    data() {
      return {
       title:"ToDo"
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
  