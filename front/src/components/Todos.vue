<template>
  
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1> To Do List</h1>
      </div>
      <!-- form -->
      <div class="form">
        <input
          type="text"
          placeholder="New Task"
          v-model="form.name"
          @keyup.enter="addTodo"
        />
        <button @click="addTodo"><i class="fas fa-plus"></i></button>
      </div>
      <!-- task lists -->
      <div class="taskItems">
        <ul>
          <TodoItem
           :todo="todo"
            v-for="(todo, index) in props.todoData"
            :key="todo.id"
           
          ></TodoItem>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button @click="completedTask">tàches complétes </button>
        <button @click="inprogressTask">tàches en cours</button>
        <button >Toutes</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Nombre de tache encours:</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import {reactive,defineProps } from 'vue';
  import type {Todo} from "@/interfaces/todo.interface"
  import TodoItem from "@/components/todoItem.vue"
  import {useTodoStore} from "../stores/todos"

  const props = defineProps<{
    todoData:Todo[]
 }>();
 
  const store = useTodoStore();

  let form = reactive({
     name:'',
  })



    /**
   * @description fonction qui gére l'ajout d'un nouveau todo
   * @param {*}  
   * @returns  Promise
   */
  function addTodo() {
    store.addTodoToStore(form);
    store.fetchAllTodos();
    form.name = ''
  }



    /**
   * @description fonction qui gére la recupération des todos complétés
   * @param {*}  
   * @returns  Promise
   */
  function completedTask(){
     store.completedTaskFromStore();
  }


    /**
   * @description fonction qui gére la recupération des todos encours
   * @param {*}  
   * @returns  Promise
   */
  function inprogressTask(){
     store.inprogressTaskFromStore();
  }
  
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.align-right {
  margin-left: auto;
}




</style>
