<template>
  <!-- <div class="card-group-wrapper"> -->
    <section class="card-group">
      <input class="group-title" type="text" v-model="title" />
<card-preview v-for="card in list.cards" :card="card" @click="$emit('cardEdit', card._id)"/>
<button class="add-card" @click="$emit('cardEdit')">+ Add a card</button>
    </section>
  <!-- </div> -->
  </template>
  
  <script>
  import cardPreview from "../cmps/card-preview.vue"
  export default {
    props:{
    list:Object,
  },
    data() {
      return {
       title:this.list.title
      }
    },  
    components:{
      cardPreview
    },
    computed: {
      // title(){
      //    console.log( this.list.title)
      // this.title= this.list.title
      // },
    },
    created() {
      
    },
    methods: {
      
    }
  
    
  }
  </script>
  