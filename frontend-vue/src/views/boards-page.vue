<template>
    <section class="container boards-page">
      <h3 class="gallery-header">
          <img src="../assets/icons/time.png" alt="">
        Recently viewed
      </h3>
      <ul class="gallery flex wrap">
        <li class="gallery-item">
            <router-link :to="'/board/' + 'taco'">
            <div class="board-preview">
              Traco
              <div class="board-preview-options">
                <img class="icon" src="../assets/icons/star_regular.svg" alt="star-regular">
              </div>
            </div>
          </router-link>
        </li>
        <li class="gallery-item">
          <div class="board-preview">
            Dummy board
            <div class="board-preview-options">
              <img class="icon" src="../assets/icons/star_regular.svg" alt="star-regular">
            </div>
          </div>
        </li>
        <li class="gallery-item">
          <div class="board-preview">
            Dummy board
            <div class="board-preview-options">
              <img class="icon" src="../assets/icons/star_regular.svg" alt="star-regular">
            </div>
          </div>
        </li>
        <li class="gallery-item">
          <div class="board-preview">
            Dummy board
            <div class="board-preview-options">
              <img class="icon" src="../assets/icons/star_regular.svg" alt="star-regular">
            </div>
          </div>
        </li>
        <li class="gallery-item">
          <div class="board-preview">
            Dummy board
            <div class="board-preview-options">
              <img class="icon" src="../assets/icons/star_regular.svg" alt="star-regular">
            </div>
          </div>
        </li>
        <!-- <li class="board-preview">Dummy board</li>
        <li class="board-preview">Dummy board</li>
        <li class="board-preview">Dummy board</li>
        <li class="board-preview">Dummy board</li> -->

        <!-- <li class="board-preview" v-for="board in boards">
          Dummy board
        </li> -->
      </ul>

    </section>
  
    
  </template>
  
  <script>
  export default {
    name: 'home',
    data() {
      return {
      }
    },
    computed: {
    },
    created() {
    },
    methods: {
    }
    
  }
  </script>
  