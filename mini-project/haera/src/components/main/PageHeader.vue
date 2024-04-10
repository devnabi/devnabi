<template>
  <nav class="navbar fixed-top navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Haera</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Demo
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div> -->
      <button @click="goToLogin" type="button" class="btn btn-outline-dark">Login</button>
      <!-- <RouterLink to="/login" class="btn btn-outline-dark">Login</RouterLink> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PageHeader',
  components: {

  },
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  }
}
</script>
