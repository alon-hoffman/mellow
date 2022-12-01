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
        <custom-card class="option-custom-card" v-click-outside="closeMiniModal" v-if="IsMiniModalOpen">
            <template #header>
                <section class="mini-modal-header">
                    <span> {{ MiniModalTitle }} </span>
                    <button class="close-mini-modal-btn" @click="closeMiniModal">X</button>
                </section>
            </template>
            <hr>

            <template v-if="(MiniModalTitle === 'Dates')">
                <el-date-picker type="date" placeholder="Pick a day" size="large" />
            </template>
            <template v-if="(MiniModalTitle === 'Members')">
                <input v-modal="filterMembersBy" @input="getFilterMembers" type="text" name="" id="">
                <span>Board Members</span>
                <el-checkbox class="members-checked-box" v-for="member in members" v-model="card.memberIds" label="member" size="large"/>
                <ul> <li v-for="member in members"></li></ul>
            </template>
            <template v-if="(MiniModalTitle === 'Labels')">
               
            </template>
            <template v-if="(MiniModalTitle === 'Checklist')">
                <el-checkbox v-model="checked1" label="Option1" size="large"/>
            </template>
            <template v-if="(MiniModalTitle === 'Cover')">
                
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
            IsMiniModalOpen: false,
            MiniModalTitle: null,
            members:['hi','hello'],
            filterMembersBy:''
        }
    },
    created() {

    },
    methods: {
        openMiniModal(value) {
            // console.log(`argument = `, argument.value)
            console.log(`ev = `, value)
            this.MiniModalTitle = value
            this.IsMiniModalOpen = true
        },
        closeMiniModal() {
            console.log(`out = `)
            this.IsMiniModalOpen = false
        },
        getFilterMembers(){
//need to filter all members
// this.members=whatever returns
        },
    },
    computed: {

    },
    components: {
        customCard,
    },
}
</script>