<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        note<sub>Book</sub>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/signin" class="nav-link">sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link">sign up</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link" @click="signOut">
              sign out
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { firebaseApp } from "../firebaseApp";

export default {
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      firebaseApp.auth().signOut();
    },
  },
};
</script>

<style lang="scss">
.navbar {
  background-color: #6794b5;
  color: #ddd;
  .navbar-brand {
    color: #fff !important;
    text-transform: capitalize;
    sub {
      color: #3a5c75;
    }
  }
  .nav-item {
    margin: 0 10px;
    .nav-link {
      color: #fff !important;
      text-transform: capitalize;
    }
  }
  .navbar-toggler {
    border-color: #fff !important;
  }
  .navbar-toggler:focus {
    color: rgb(255 255 255 / 50%);
  }
}
</style>
