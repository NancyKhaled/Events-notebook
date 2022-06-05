<template>
  <div class="sign-up">
    <div class="container mt-4">
      <div class="form-inline">
        <h3 class="title">sign up</h3>
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
          <button class="btn btn-primary mt-4" @click="signUp">sign up</button>
          <p class="mt-3">
            Already user? <router-link to="/signin">sign in</router-link>
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
    };
  },
  methods: {
    signUp() {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>

<style lang="scss">
.sign-up {
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
