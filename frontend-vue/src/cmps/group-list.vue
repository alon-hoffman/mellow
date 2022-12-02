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
      <button v-if="!isNewListEdit" @click="isNewListEdit=true">Add another list</button>
      <form v-else @submit.prevent="addList"  v-click-outside="closeEdit" >
        <input type="text" v-model="newTitle"/>
        <input type="submit">
      </form>
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
