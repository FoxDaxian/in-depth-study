<style>

</style>
    <template>
    <div id="app">
        <input type="text" v-model="customName">
        {{name}}
        <button @click="changeName">click me</button>
    </div>
</template>

<script>
import store from "@/store";

export default {
  name: "App",
  data() {
    return {
        customName: 1
    };
  },
  methods: {
        changeName() {
            this.$store.commit('changeName', {name: this.customName})
        }
  },
  computed: {
    name() {
        return this.$store.state.name;
    }
  }
};
</script>
