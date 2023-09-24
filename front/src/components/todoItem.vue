<template>
    <li>
      <button @click.self="completeTodo(todo)"  :class="getClassName(todo)">
        <i class="far fa-circle"></i> {{ todo.name }}
      </button>
      <button :class="getClassTodo(todo)">{{ todo.etat }}</button>
      <button @click="deletedTodo(todo.id)"><i class="far fa-trash-alt icon-size"></i></button>

    </li>
  </template>

<script lang="ts" setup>
  import {ref,onMounted,defineProps} from "vue"
  import type {Todo} from "@/interfaces/todo.interface"
  import {useTodoStore} from "../stores/todos"
  const store = useTodoStore();


   const props = defineProps<{
    todo:Todo
 }>();

 function deletedTodo(id:number|undefined){
   store.deletedTodoFromStore(id);
   store.fetchAllTodos();
 }

 function completeTodo(todo:Todo){
    store.updateTodoState(todo);
    store.fetchAllTodos();
 }

 function getClassName(todo:Todo){
    return todo.etat == "termine" ? "barre" : ""

 }

 function getClassTodo(todo:Todo){
    return todo.etat == "termine" ? "terminated" : "inprogess"

 }

</script>

<style lang="css">
  .barre {
  text-decoration: line-through;
  color:  #f7378d; 
  font-size: 18px;
}

.button_state{
  padding: 2px 5px;
  color: #fff;
  font-weight: bold;
}
.terminated{
   background-color: #f7378d !important;
   padding: 3px 6px;
  color: #fff;
  font-weight: bold;
  border-radius: 12%;
  font-size:15px;
}
.inprogess{
  background-color: #4ec5c1 !important;
  padding: 3px 6px;
  color: #fff;
  font-weight: bold;
  border-radius: 12%;
  font-size:14px;
}
.icon-size{
  font-size:20px;
}

</style>