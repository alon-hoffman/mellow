<template>
            <div class="modal-screen" :class="isOn" @click="$emit('toggleEdit')"></div>
            <article class="edit-modal">
                <header class="modal-header">
                    <img src="../assets/icons/dashboard.svg" alt="">
                    <h1>Do whatever whatever whatever</h1>
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
    state() {
        return{
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