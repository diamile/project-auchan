<script setup lang="ts">
import {ref,onMounted} from "vue"
import Todos from '../components/Todos.vue'
import {useTodoStore} from "../stores/todos";
  const store = useTodoStore();

  //au moment du montage du composant fetcher toutes les todos
  onMounted(()=>{
    store.fetchAllTodos();
  })
</script>

<template>
  <main>
    <Todos :todoData="store.todos"/>
  </main>
</template>
