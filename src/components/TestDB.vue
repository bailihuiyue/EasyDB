<template>
  <div>
    <!-- <div
      class="hello"
      @click="EasyDB"
    >测试EasyDB</div> -->
    <br />
    <br />
    <br />
    <div @click="testDB">测试HelloIndexedDB</div>
    <div @click="testDB2">测试HelloIndexedDB2</div>
    <div @click="add">测试EasyDB</div>
  </div>
</template>

<script>
import EasyDB from "../utils/EasyDB.js";
import HDB, { HelloIndexedDB } from "../utils/hello-indexeddb.js";
export default {
  name: "TestDB",
  methods: {
    testDB: () => {
      const store = new HelloIndexedDB();
      store.setItem("name", "tomy");
    },
    testDB2: () => {
      const store = new HelloIndexedDB();
      store.setItem("name2", "tomy");
    },
    add: async () => {
      // const store = EasyDB();
      const a = await EasyDB.set("name2", Math.random());
      const b = await EasyDB.readAll();
      console.log(b);
    }
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
