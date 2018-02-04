<style>

</style>
    <template>
    <div id="app">
        {{name}}
        <input type="text" v-model="name">
        <button @click="show">click me</button>
    </div>
    </template>

    <script>
import HW from "@/components/HelloWorld";
import store from "@/store";

export default {
  name: "App",
  data() {
      return {
          name: store.name
      }
  },
  methods: {
      show () {
          console.log(store);
      }
  },
  components: {
    HW
  },
  
};
</script>
