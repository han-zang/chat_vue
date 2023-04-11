<script setup>
import Card from '/src/components/card.vue'
import List from '/src/components/list.vue'
import Message from '/src/components/message.vue'
import Stext from '/src/components/text.vue'
</script>

<template>
  <div id="tmp">
      <div class="sidebar">
          <card></card>
          <list></list>
      </div>
      <div class="main">
          <message></message>
          <stext></stext>
      </div>
  </div>
  </template>

<style scoped>
#tmp {
    margin: 20px auto;
    width: 800px;
    height: 600px;
    overflow: hidden;
    border-radius: 3px;
}
#tmp .sidebar,
#tmp .main {
    height: 100%;
}
#tmp .sidebar {
    float: left;
    width: 200px;
    color: #f4f4f4;
    background-color: #2e3238;
}
#tmp .main {
    position: relative;
    overflow: hidden;
    background-color: #eee;
}
#tmp .text {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
}
#tmp .message {
    height: calc(100% - 160px);
}
</style>
