<template>
  <div class="col-md-4 offset-md-4">
    <h3 class="text-center mb-3" autofocus>Create task</h3>
    <form @submit.prevent="saveTask()" class="card card-body ">
    <input class="form-control mb-3" type="text" name="title" id="title" placeholder="Write a title" v-model="task.title">
    <textarea class="form-control mb-3" name="description" id="description" rows="3" placeholder="Write a description"
      v-model="task.description"></textarea>
    <button class="btn btn-primary" type="submit" :disabled="!task.title || !task.description ? true : false">Save</button>
  </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Task } from '@/interfaces/Task'
import { createTask } from '@/services/TaskService'

export default defineComponent({
  data() {
    return{
      task: {
      } as Task
    }
  },
  methods: {
    async saveTask() {
      const res = await createTask(this.task)
      console.log(res.data)
      this.$router.push({name: 'tasks'})
    }
  }
})



</script>