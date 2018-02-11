<style>

</style>

<template>
    <div id="app">
        <HW></HW>
        {{name}}
    </div>
</template>

<script>
import HW from "./components/HelloWorld.vue";
import store from "@/store";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    HW
  },
  methods: {},
  watch: {},
  computed: {
    name() {
      return this.$store.state.name;
    }
  },
  mounted() {
  }
};
</script>
