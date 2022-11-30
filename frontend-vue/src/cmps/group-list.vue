<template>
  <section v-if="lists" class="group-list">
    <ul class="clean-list">
      <pre>{{lists}}</pre>
    <card-group v-for="list in 6" @cardEdit="$emit('cardEdit', $event)"/>
  </ul>
  </section>
</template>

<script>
import cardGroup from "../cmps/card-group.vue";
export default {
  props:{
    lists:Array,
    required:true,
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
