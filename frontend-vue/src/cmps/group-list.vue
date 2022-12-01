<template>
  <section v-if="lists" class="group-list">
    <ul class="clean-list">
    <card-group v-for="list in lists" :list="list" :key="list.id" @cardEdit="$emit('cardEdit', $event)"/>
  </ul>
  </section>
</template>

<script>
import cardGroup from "../cmps/card-group.vue";
export default {
  props:{
    lists:Array,
  },
  data() {
    return {
      
    };
  },
  components: {
    cardGroup,
  },
  computed: {},
  created() {},
  methods: {},
};
</script>
