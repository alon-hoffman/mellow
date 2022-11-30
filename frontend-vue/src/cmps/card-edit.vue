<template>
            <div class="modal-screen" :class="isOn" @click="$emit('toggleEdit')"></div>
            <article class="modal on" :class="isOn">
                <header class="modal-header">
                    <img src="../assets/icons/dashboard.svg" alt="">
                    <input type="text" v-model="demoCard.title">
                    <p>in list <span>traco</span></p>
                </header>
                <section class="card-description">
                    <span>
                        <img src="../assets/icons/description.svg" alt="">
                        <h3>Description</h3>
                        <img src="../assets/icons/info.svg" alt="info">
                    </span>
                    <textarea name="" id="" cols="30" rows="3" placeholder="Add a more detailed description…"></textarea>
                </section>
                <section class="card-activity-bar flex justify-between">
                    <span>
                        <img src="../assets/icons/activities.svg" alt="activities">
                        <h3>Activity</h3>
                    </span>
                    <button>Hide Details</button>
                </section>
            </article>

</template>

<script>
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
    },
    computed: {
    isOn() {
           return { on: this.isScreen === true }
       },
   },
}
</script>