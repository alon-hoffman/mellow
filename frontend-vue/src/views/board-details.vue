<template>
    <section class="board-details">
      <!-- <sidebar/> -->
     
      <div class="board-header">
        <div class="board-header-left">
          <h1 class="editable">Traco</h1>
          <button class="transparent-btn"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m16.15 37.75 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L24 13.7l-3.55 8.35-9.1.8 6.9 6ZM11.65 44l3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55ZM24 26.25Z"/></svg></button> 
          </div>
        <div class="board-header-right">
          <btn class="transparent-btn">Filter</btn>
          <div class="member-list"><span>AH</span><span>EH</span><span>IM</span></div>
          <button><img src="../assets/icons/person_add.svg"/> share</button>
          </div>
           
      </div>
    </section>
    
  </template>
  
  <script>
import sidebar from "../cmps/sidebar.vue"

//icons


  export default {
    data() {
      return {
       
      }
    },
    components: {
      sidebar
    },
    
    computed: {
      
    },
    created() {
      
    },
    methods: {
      
    }
  
    
  }
  </script>
  