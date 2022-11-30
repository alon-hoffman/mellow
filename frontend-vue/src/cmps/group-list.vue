<template>
  <section class="card-group-list">
    <h1>group-list</h1>
    <ul class="clean-list">
    <card-group v-for="list in lists"/>
  </ul>
  </section>
</template>

<script>
import cardGroup from "../cmps/card-group.vue";
export default {
  data() {
    return {
      // lists=["","","","","","",]
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
