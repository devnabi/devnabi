<template>

  <div class = "black-bg" v-if="isModalOpen == true">
    <div class="white-bg">
      <h1>상세페이지</h1>
      <p>상세페이지의 내용</p>
      <button @click="isModalOpen = false">나가기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for=" menus in menu " :key="menus"> {{ menus }} </a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png" @click="isModalOpen = true">

  <br>
  
  <button @click="counter1++">+1 버튼</button> <span>: {{ counter1 }}</span>
  <br>
  <button @click="increaseCounterByTwo">+2 버튼</button> <span> : {{ counter2 }}</span>

  <div>
    <img class = "image" alt = "Apple" src="./assets/unsplash-Apple.jpg">
    <h2 class = "apple" :style="style">{{ exportData[0].title }}</h2>
    <h3>{{ color[0] }}</h3>

    <img class = "image" alt = "Pineapple" src="./assets/unsplash-Pineapple.jpg">
    <h2>{{ exportData[1].title }}</h2>
    <h3>{{ color[1] }}</h3>

    <img class = "image" alt = "Grape" src="./assets/unsplash-Grape.jpg">
    <h2>{{ exportData[2].title }}</h2>
    <h3>{{ color[2] }}</h3>
  </div>
</template>

<script>

import data from "./assets/data.js"

export default {
  name: 'App',
  data() {
    return {
      exportData : data,
      
      menu : ["Home", "Shop", "About"],
      apple : "사과",
      pineapple : "파인애플",
      grape : "포도",
      color : ["red & green", "yellow" , "purple"],
      style : "color: magenta;",

      counter1 : 0,
      counter2 : 0,

      isModalOpen : false
    }
  },

  methods : {
    increaseCounterByTwo() {
      this.counter2 += 2;
    }
  },

  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.image {
  width: 100%;
  margin-top: 60px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: #00000089;
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
