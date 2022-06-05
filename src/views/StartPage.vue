<template>
  <div class="start-page">
    <img alt="notebook logo" class="notebook" src="../assets/Notebook.png" />
    <p class="app-title">notebook app</p>
    <p>Already user? <router-link to="/signin">sign in</router-link></p>
    <p>new user? <router-link to="/signup">sign up</router-link></p>
  </div>
</template>

<style lang="scss">
.start-page {
  .notebook {
    width: 200px;
    margin: 20px auto 0 auto;
  }
  .app-title {
    text-transform: capitalize;
    color: #3a5c75;
    font-size: 12px;
  }
  p {
    text-transform: capitalize;
    a {
      text-transform: capitalize;
    }
  }
}
</style>
