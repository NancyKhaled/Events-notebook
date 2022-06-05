<template>
  <div class="container mt-4">
    <div class="event-card">
      <h4 class="card-title">{{ event.title }}</h4>
      <p class="card-text">{{ event.description }}</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">date: {{ event.date }}</li>
        <li class="list-group-item">location: {{ event.location }}</li>
        <li class="list-group-item">host: {{ event.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style lang="scss">
.event-card {
  text-transform: capitalize;
  border: thin solid #6794b5;
  border-radius: 10px;
  padding: 10px;
  .card-title {
    font-weight: 600;
  }
  .card-text {
    color: #757575;
  }
}
</style>
