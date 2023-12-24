<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Vue Typescript</RouterLink>
      <div class="">
        <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Tasks</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/tasks/new" class="nav-link">Create Task</RouterLink>
        </li>
      </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar'
})
</script>