<template>
  <div class="dash-board mt-4">
    <div class="container">
      <h3 class="title">dashboard</h3>
      <button class="btn btn-danger btn-sm sign-out" @click="signOut">
        sign out
      </button>
      <hr />
      <AddEvent></AddEvent>
      <hr />
      <div class="row">
        <EventItem
          class="col-md-4"
          v-for="(event_item, index) in this.$store.state.events"
          :event="event_item"
          v-bind:key="index"
        >
        </EventItem>
      </div>
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "../firebaseApp";
import AddEvent from "./AddEvent.vue";
import EventItem from "./EventItem.vue";

export default {
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      firebaseApp.auth().signOut();
    },
  },
  components: {
    AddEvent,
    EventItem,
  },
  mounted() {
    eventsRef.on("value", (snap) => {
      let events = [];
      snap.forEach((event) => {
        events.push(event.val());
      });
      this.$store.dispatch("setEvents", events);
    });
  },
};
</script>

<style lang="scss">
.dash-board {
  position: relative;
  margin-bottom: 100px;
  .title {
    text-transform: capitalize;
  }
  .sign-out {
    text-transform: capitalize;
    position: absolute;
    top: -2px;
    right: 15px;
    padding: 5px;
  }
}
</style>
