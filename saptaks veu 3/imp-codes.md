<!-- Day-1 -->

const app = Vue.createApp({
// template: "<h2>This is Template</h2>",

data() {
return {
title: "The final empire",
author: "Bryan Adams",
Age: 40,
};
},
//Event handler
methods: {
changeTitle() {
this.title = "Heart Of a Wise man";
},
},
});

app.mount("#app");

<!-- EVent handlers in HTML orInline handlers -->

      <button v-on:click="Age++">Increase Age</button>

      <button v-on:click="Age--">Decrease Age</button>
      <div @click="changeTitle">Change Book Title</div>
