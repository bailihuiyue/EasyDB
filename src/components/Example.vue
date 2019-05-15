<template>
  <div>
    <div @click="set">set</div>
    <div @click="get">get</div>
    <div @click="del">delete</div>
    <div @click="readAll">readAll</div>
    <div @click="clear">clear</div>
  </div>
</template>

<script>
import EasyDB from "../utils/EasyDB";
export default {
  name: "Example",
  methods: {
    set: async () => {
      const set = await EasyDB.set("name2", Math.random());
      console.log("set", set);
    },
    get: async () => {
      const get = await EasyDB.get("name2");
      console.log("get", get);
    },
    del: async () => {
      const del = await EasyDB.delete("name2");
      console.log("delete", del);
    },
    readAll: async () => {
      const readAll = await EasyDB.readAll();
      console.log("readAll", readAll);
    },
    clear: async () => {
      const clear = await EasyDB.clear();
      console.log("clear", clear);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 10px;
}
</style>
