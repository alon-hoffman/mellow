<template>
  <section class="group-list">
    <ul class="clean-list">
    <card-group v-for="list in 6" @cardEdit="$emit('cardEdit', $event)"/>
  </ul>
  </section>
</template>

<script>
import cardGroup from "../cmps/card-group.vue";
export default {
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
