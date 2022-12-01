<template>
            <div  class="modal-screen" :class="isOn" @click="$emit('toggleEdit')">
            <article class="modal" :class="isOn">
                <header class="modal-header edit-block">
                    <img class="icon" src="../assets/icons/dashboard.svg" alt="">
                    <input class="header" type="text" v-model="demoCard.title">
                    <p class="content">in list <span class="move-card-link">traco</span></p>
                </header>
                <div class="modal-content flex">
                    <section class="edit-blocks">
                        <section class="card-description edit-block">
                            <img class="icon" src="../assets/icons/description.svg" alt="">
                            <h3 class="header">Description</h3>
                            <div class="content fake-text-area fake-button" @click="toggleTextArea">Add a more detailed description…</div>
                            <!-- <textarea name="" id="" cols="30" rows="3" placeholder="Add a more detailed description…"></textarea> -->
                        </section>
                        <section class="card-activity-bar flex justify-between">
                                <img src="../assets/icons/activities.svg" alt="activities">
                                <h3>Activity</h3>
                            <button>Hide Details</button>
                        </section>
                    </section>
                    <modal-sidebar />
                </div>
            </article>
        </div>

</template>

<script>
import modalSidebar from './modal-sidebar.vue'
export default{
    props:{
        isScreen : Boolean
    },
    data(){
        return {
            demoCard: {
                title: 'Make logo',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        }
    },
    methods:{
        toggleTextArea(){
            console.log('toggle between real and fake textarea')
        },
    },
    computed: {
    isOn() {
           return { on: this.isScreen === true }
       },
   },
   components: {
    modalSidebar
   },
}
</script>