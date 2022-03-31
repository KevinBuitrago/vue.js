<template>
   <div class="home">
    <div >
    <tablaTask/>
    </div>
  </div>
</template>
<script>
import tablaTask from '@/views/task/taskTodo.vue'
export default {
  name: 'TaskView',
  components: {
    tablaTask
  }
}
</script>
