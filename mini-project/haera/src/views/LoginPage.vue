<template>
  <form>
    <fieldset>
      <div class="mt-4">
        <h1 class="text-primary">Login</h1>
      </div>

      <div class="container mt-3">

        <div class="row justify-content-center">
          <div class="col-4">
            <label for="exampleInputEmail1" class="form-label mt-4 custom-cursor-default-hover">Email
              Address</label>
            <div class="input-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Haera@example.com">
              <button class="btn btn-secondary btn-sm" type="button" id="button-addon2">Email Verification</button>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-4">
            <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
              autocomplete="off">
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="form-check col-2 mt-4">
            <input class="form-check-input custom-cursor-default-hover" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label custom-cursor-default-hover" for="flexCheckDefault">
              Remember ID
            </label>
          </div>
        </div>

        <div class="row justify-content-center mt-2">
          <div class="col-auto">
            <a class="btn btn-link" href="#">Find ID</a>
          </div>
          <div class="col-auto">
            <a class="btn btn-link" href="#">Find Password</a>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-lg my-4">Ok!</button>
    </fieldset>
  </form>

  <a class="text-secondary" href="#">Are you not a member?</a>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>
