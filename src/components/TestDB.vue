<template>
  <div class="hello" @click="EasyDB">测试IndexedDB</div>
</template>

<script>
import EasyDB from "../utils/EasyDB.js";

export default {
  name: "TestDB",
  methods:{
    EasyDB
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
