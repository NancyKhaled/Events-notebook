<template>
  <div class="container">
    <h4 class="add-e">
      add an event
      <input type="checkbox" v-model="showForm" />
    </h4>
    <div class="form" v-if="showForm">
      <div class="form-group">
        <label for="title">title</label>
        <input
          type="text"
          class="form-control"
          v-model="event.title"
          id="title"
        />
      </div>
      <div class="form-group">
        <label for="description">description</label>
        <textarea
          class="form-control"
          v-model="event.description"
          id="description"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="date">date</label>
        <input
          type="date"
          class="form-control"
          v-model="event.date"
          id="date"
        />
      </div>
      <div class="form-group">
        <label for="location">location</label>
        <input
          type="text"
          class="form-control"
          v-model="event.location"
          id="location"
        />
      </div>
      <button class="btn btn-primary submit" @click="addEvent">submit</button>
    </div>
  </div>
</template>

<script>
import { eventsRef } from "../firebaseApp";

export default {
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: "",
      },
      showForm: false,
    };
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event);
    },
  },
};
</script>

<style lang="scss">
.add-e {
  text-align: left;
  font-size: 18px;
  text-transform: capitalize;
}
.form {
  .form-group {
    text-align: left;
    margin: 20px auto;
    label {
      text-transform: capitalize;
    }
  }
  .submit {
    text-transform: capitalize;
  }
}
</style>
