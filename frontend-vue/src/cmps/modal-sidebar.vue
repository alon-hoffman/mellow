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
                    <span> {{ miniModalTitle }} </span>
                    <button class="close-mini-modal-btn" @click="closeMiniModal">X</button>
                </section>
            </template>
            <hr>

            <template v-if="(miniModalTitle === 'Dates')">
                <!-- <div class="el-picker-panel__body"></div> -->
                <section class="mini-modal-body">
                    <el-date-picker type="date" placeholder="Pick a day" size="large" />
                </section>
            </template>
            <template v-if="(miniModalTitle === 'Members')">
                <section class="mini-modal-body">
                    <input v-model="filterMembersBy" @input="getFilterMembers" type="text" name="" id=""
                        placeholder="Search members">
                    <span>Board Members</span>
                    <el-checkbox class="members-checked-box" v-for="member in members" v-model="cardCopy.memberIds"
                        label="member" size="large" />
                </section>
            </template>
            <template v-if="(miniModalTitle === 'Labels')">
                <section class="mini-modal-body">
                    <input v-model="filterMembersBy" @input="getFilterMembers" type="text" name="" id=""
                        placeholder="Search labels">
                    <span>Labels</span>
                    <section class="labels-checked-section">
                        <el-checkbox class="labels-checked-box" v-for="label in labels" v-model="cardCopy.labelIds"
                            label="member" size="large" />
                    </section>
                </section>
            </template>
            <template v-if="(miniModalTitle === 'Checklist')">
                <section class="mini-modal-body">
                    <span>Title</span>
                    <input v-model="checklist" @submit="addChecklist" type="text">
                </section>
            </template>
            <template v-if="(miniModalTitle === 'Attachment')">
                <section class="mini-modal-body">
                    <span>Attach a link</span>
                    <input type="text" placeholder="Paste any link here...">
                </section>
            </template>
            <template v-if="(miniModalTitle === 'Cover')">
                <section class="mini-modal-body">
                    <span>Colors</span>
                    <div class="first-colors-row">
                        <button class="green-btn"></button>
                        <button class="yellow-btn"></button>
                        <button class="orange-btn"></button>
                        <button class="red-btn"></button>
                        <button class="purple-btn"></button>
                    </div>
                    <div class="second-colors-row">
                        <button class="blue-btn"></button>
                        <button class="bright-blue-btn"></button>
                        <button class="bright-green-btn"></button>
                        <button class="pink-btn"></button>
                        <button class="dark-blue-btn"></button>
                    </div>
                    <span>Attachments</span>
                    <label class="cover-img-label">
                        <div class="fake-button cover-img-btn">Upload a cover image </div><input
                            @input="setBackgroundCard" class="cover-img-input" type="file">
                    </label>
                </section>
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
            miniModalTitle: null,
            members: ['hi', 'hello'],
            cardCopy: {},
            filterMembersBy: '',
            checklist: "checklist",
        }
    },
    created() {

    },
    methods: {
        openMiniModal(value) {
            // console.log(`argument = `, argument.value)
            console.log(`ev = `, value)
            this.miniModalTitle = value
            this.IsMiniModalOpen = true
        },
        closeMiniModal() {
            console.log(`out = `)
            this.IsMiniModalOpen = false
        },
        getFilterMembers() {
            //need to filter all members
            // this.members=whatever returns
        },
        setBackgroundCard() {

        },
    },
    computed: {

    },
    components: {
        customCard,
    },
}
</script>