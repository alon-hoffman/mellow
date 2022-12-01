<template>
    <section class="modal-add-menu">
        <h4>Add to card</h4>
        <div @click="openMiniModal('Members')" class="fake-button add-option-div" value="hello"><img
                class="add-option-img" src="../assets/icons/person.svg" alt="">Members</div>
        <div @click="openMiniModal('Labels')" class="fake-button add-option-div"><img class="add-option-img"
                src="../assets/icons/tags.svg" alt="">Labels
        </div>
        <div @click="openMiniModal('Checklist')" class="fake-button add-option-div"><img class="add-option-img"
                src="../assets/icons/check_box_marked.svg" alt="">Checklist</div>
        <div @click="openMiniModal('Dates')" class="fake-button add-option-div"><img class="add-option-img"
                src="../assets/icons/clock-regular.svg" alt="">Dates</div>
        <div @click="openMiniModal('Attachment')" class="fake-button add-option-div"><img class="add-option-img"
                src="../assets/icons/attach.svg" alt="">Attachment</div>
        <div @click="openMiniModal('Cover')" class="fake-button add-option-div"><img class="add-option-img"
                src="../assets/icons/cover.svg" alt="">Cover
        </div>
        <custom-card  v-if="IsMiniModalOpen">
            <template #header>
                <p><span class="fw-bold">Name:</span> </p>
                <p><span class="fw-bold">In stock:</span> </p>
                <p><span class="fw-bold">Price:</span></p>
            </template>

            <template #footer>
                <div class="btn-group">
                    <button class="btn btn-primary">edit</button>
                    <button  class="btn btn-info">details</button>
                    <button  class="btn btn-danger">delete</button>
                </div>
            </template>
        </custom-card>
    </section>
</template>


<script>
import customCard from './custom-card.vue'
export default {
    props: {
        card: {
            type: Object
        }
    },
    data() {
        return {
            IsMiniModalOpen:false
        }
    },
    created() {

    },
    methods: {
        openMiniModal(value) {
            // console.log(`argument = `, argument.value)
            console.log(`ev = `, value)
            this.IsMiniModalOpen=true
        },
        closeMiniModal(){
            this.IsMiniModalOpen=false
        }
    },
    computed: {

    },
    components: {
        customCard,
    },
}
</script>