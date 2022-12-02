<template>
  <section v-if="lists" class="group-list">
    <ul class="clean-list">
      <card-group @edit="$emit('edit')"
        v-for="list in lists"
        :list="list"
        :key="list.id"
        @cardEdit="$emit('cardEdit', $event)"
        @saveList="$emit('saveList', $event)"
      />
      <button v-if="!isNewListEdit" class="add-line-btn clickable" @click="isNewListEdit=true">Add another list</button>
      <div v-else @submit.prevent="addList" class="add-list-section" v-click-outside="closeEdit">
        <input type="text" v-model="newTitle"  placeholder="Enter list title..."/>
        <div class="buttons">
        <button class="clickable">Add list</button>
        <img @click="closeNewCard" class="clickable" src='../assets/icons/close.png'>
      </div>
      </div>
    </ul>
  </section>
</template>

<script>
import cardGroup from "../cmps/card-group.vue";
export default {
  props: {
    lists: Array,
  },
  data() {
    return {
      isNewListEdit:false,
      newTitle:''
    };
  },
  created(){
console.log(`this.lists = `, this.lists)
  },
  components: {
    cardGroup,
  },
  computed: {},
  created() {},
  methods: {
    addList(){
      this.isNewListEdit=false
      this.$emit('saveList', {list: this.newTitle})
    },
    closeEdit(){
      this.isNewListEdit=false
    }
  },
};
</script>
