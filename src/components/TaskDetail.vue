<template>
  <div class="col-md-4 offset-md-4">

    <h1>task deatils</h1>
    <form @submit.prevent="handleUpdate()" class="card card-body" autofocus>
      <input type="text" v-model="currentTask.title" class="control-input mb-3">
      <textarea v-model="currentTask.description" rows="3" class="control-input mb-3"></textarea>
      <button class="btn btn-primary" type="submit" :disabled="!currentTask.title || !currentTask.description ? true : false">Update</button>
    </form>
    <div class="text-center">
      <button @click="handleDelete()" class="btn btn-danger mt-3">delete</button>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Task } from '@/interfaces/Task'
import { getTask, updateTask, deleteTask } from '@/services/TaskService'
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      currentTask: {} as Task
    }
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id)
      this.currentTask = res.data
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        const res = await updateTask(this.$route.params.id, this.currentTask)
        console.log(res)
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {
        deleteTask(this.$route.params.id)
        this.$router.push('/')
      }
    }
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id)
    }
  },
})
</script>