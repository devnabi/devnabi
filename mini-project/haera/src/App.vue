<template>
  <div class="background">
    <div id="app">
      <PageHeader></PageHeader>
      <!-- <MyNav></MyNav> -->
      <!-- <MyList></MyList> -->
      <router-view :key="$route.path">
      <!-- <router-view> -->
        <!-- <HomePage></HomePage> -->
        <!-- <LoginPage></LoginPage> -->
        <!-- <SignUpPage></SignUpPage> -->
        <!-- <MyProfileUpdate></MyProfileUpdate> -->
      </router-view>
    </div>
  </div>
</template>

<script>
import PageHeader from './components/main/PageHeader.vue';
// import MyNav from './components/my/MyNav.vue';
// import MyList from './components/my/MyList.vue';
// import HomePage from './views/HomePage.vue';
// import ErrorPage from './views/ErrorPage.vue';
// import LoginPage from './views/LoginPage.vue';
// import SignUpPage from './views/SignUpPage.vue';
// import MyProfileUpdate from './components/my/MyProfileUpdate.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    // MyNav,
    // MyList,
    // HomePage,
    // ErrorPage,
    // LoginPage,
    // SignUpPage,
    // MyProfileUpdate,
  }
}
</script>

<style>
.background {
  background: linear-gradient(50deg, #144375, black);
  height: 100vh;
  width: 100vw;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: aliceblue;
  margin-top: 60px;
}
</style>
