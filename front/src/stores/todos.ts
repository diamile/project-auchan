
import { defineStore } from 'pinia'

import {
  fetchAllTodosFromService,
  addTodoFromService,
  deletedTodoFromService,
  updateTodoStateFromService,
  completedTaskFromService,
  inprogressTaskFromService
} from "../services/todo.service"
import type {Todo} from "../interfaces/todo.interface"

export const useTodoStore = defineStore('todoStore',  {
  state:()=>({
     todos:[]
  }),
  getters:{
    getTodos(state){
      return state.todos
    },

  },
  actions:{

    /**
     * @description action qui gére la recupération de tous les todos
     * @param {*}  
     * @returns  Promise
     */
    async fetchAllTodos() {
      try{
        const response = await fetchAllTodosFromService();
        console.log('responsess',response.data)
        this.todos = response.data
      }catch(err){
        console.log('Error',err)
      }
    },

    /**
     * @description action qui gére l'ajout d'un nouveau todo
     * @param {*}  
     * @returns  Promise
     */
    async addTodoToStore(todo:Todo){
      try{
        await addTodoFromService(todo);
      }catch(err){
         console.log('err',err)
      }
    },


    /**
     * @description action qui gére suppression d'un todo 
     * @param {*}  
     * @returns  Promise
     */
    async deletedTodoFromStore(id:number){
      try{
        await deletedTodoFromService(id);
      }catch(err){
         console.log('err',err)
      }
    },

     /**
     * @description action qui gére la modification d'un todo 
     * @param {*}  
     * @returns  Promise
     */
    async updateTodoState(todo:Todo){
      try{
        const response = await updateTodoStateFromService(todo);
      }catch(err){
         console.log('err',err)
      }
    },



     /**
     * @description action qui gére la recupération des todos complétes 
     * @param {*}  
     * @returns  Promise
     */

    async completedTaskFromStore(){
      try{
        const response = await completedTaskFromService();
        this.todos = response.data
      }catch(err){
         console.log('err',err)
      }
    },



      /**
     * @description action qui gére la recupération des todos encours 
     * @param {*}  
     * @returns  Promise
     */
    async inprogressTaskFromStore(){
      try{
        const response = await inprogressTaskFromService();
        this.todos = response.data
      }catch(err){
         console.log('err',err)
      }
    },

    },
})
  