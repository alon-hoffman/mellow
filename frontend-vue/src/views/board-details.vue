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
          <button class="transparent-btn"><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="currentColor"></path></svg></button> 
          </div>
           <group-list/>
      </div>
    </section>
    
  </template>
  
  <script>
import sidebar from "../cmps/sidebar.vue"
import groupList from "../cmps/group-list.vue"

//icons


  export default {
    data() {
      return {
       
      }
    },
    components: {
      sidebar,
      groupList
    },
    
    computed: {
      
    },
    created() {
      
    },
    methods: {
      
    }
  
    
  }
  </script>
  