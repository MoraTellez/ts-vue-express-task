<template>
    <ul class="list-group">
      <li class="list-group-item list-group-item-action cursor-pointer" role="button" v-for="(task, index) in tasks"
        :key="task._id" @click="this.$router.push(`/tasks/${task._id}`)">{{ index+1 }} {{
          task.title }}</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getTasks } from '@/services/TaskService'
import { Task } from '@/interfaces/Task'

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[]
    }
  },
  methods: {
    async loadTasks() {
      const res = await getTasks()
      this.tasks = res.data
    }
  },
  mounted() {
    this.loadTasks()
  }
})
</script>