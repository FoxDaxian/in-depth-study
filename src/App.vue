<style>

</style>

<template>
    <div id="app">
        <HW></HW>
        <input type="text" v-model="name">
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
      return this.$options.parent.$options.test.name;
    }
  },
  mounted() {
    setTimeout(() => {
        console.log(123);
        this.$set(this.$options.parent.$options.test, 'name', '123fox')
        console.log(this.$options.parent.$options.test);
        console.log(this);
    }, 2000)
  }
};
</script>
