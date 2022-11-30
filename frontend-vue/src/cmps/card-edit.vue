<template>
            <div class="modal-screen" :class="isOn" @click="toggleScreen"></div>

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