<template>
  <div class="sign-in">
    <div class="container mt-4">
      <div class="form-inline">
        <h3 class="title">sign in</h3>
        <div class="form-group mt-4">
          <input
            class="form-control"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
          />
          <input
            class="form-control mt-3"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
          />
          <button class="btn btn-primary mt-4" @click="signIn">sign in</button>
          <p class="mt-3">
            new user? <router-link to="/signup">sign up</router-link>
          </p>
        </div>
        <br />
        <p class="error-msg">{{ error.message }}</p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: "",
      },
      typeField: "password",
    };
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>

<style lang="scss">
.sign-in {
  .form-inline {
    .title {
      text-transform: capitalize;
    }
    .btn {
      text-transform: capitalize;
    }
  }
  .error-msg {
    color: red;
  }
}
</style>
