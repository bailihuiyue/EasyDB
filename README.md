# EasyDB

###### 这是一个可以帮助大家轻松操作IndexDB的工具,无需关心复杂的api,只需要简单的操作就能完成数据的增删改查,

###### 目前提供的方法有: set,get,delete,readAll,clear

###### 这个工具还会判断是否支持IndexedDB,如果不支持,自动转为localStorage,并且api是相同的

##### 使用方法:

```html
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

```

##### 兼容性:IE9+,Chrome,FireFox,Safari....



#### 前端存储常见使用场景

1.cookie

少量内容,和用户相关的信息,每次请求需要带回给服务器的,

**例如**:自动登录,跟踪统计用户访问该网站的习惯

2.localStorage

常用于长期登录（+判断用户是否已登录），适合长期保存在本地的数据 

**例如**:少量数据内容,codelist,下拉框选项,一些固定不变的页面信息

3.sessionStorage 

数据在当前会话中保存下来，刷新页面数据依旧存在。关闭页面或浏览器后，sessionStorage 中的数据就会被清空。

**例如**:缓存的页面数据,进行页面传值(监听storage事件),不需要永久保存的信息,

4.Indexeddb

存储空间无限,但是数据库超过50M的时候浏览器会弹出确认，当我们是在做一个离线应用，或者webapp的时候，可以考虑使用本地数据库中存取数据

**例如**:PWA,大量内容,BIM模型等

####  