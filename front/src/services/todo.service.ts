import axios from "axios"
import type {Todo} from "../interfaces/todo.interface"


/**
 * @description service qui gére la recupération des todos
 * @param {*}  
 * @returns  Promise
 */
export async function fetchAllTodosFromService(){
    try{
        const response = await axios.get('/api/todos');
        return response;

    } catch(err){
        throw err;
    }
}


/**
 * @description service qui gére l'ajout d'un nouveau todo
 * @param {*}  
 * @returns  Promise
 */
export async function addTodoFromService(todo:Todo){
    try{
        const response = await axios.post('/api/todos',todo);
        return response;

    } catch(err){
        throw err;
    }
}

/**
 * @description service qui gére la suppression de todos
 * @param {*}  
 * @returns  Promise
 */
export async function deletedTodoFromService(todoId:Todo){
    try{
        let query = `/api/todos/${todoId}`
        const response = await axios.delete(query);
        return response;

    } catch(err){
        throw err;
    }
}


/**
 * @description service qui gére mise à jours de l'etat d'un todo
 * @param {*}  
 * @returns  Promise
 */
export async function updateTodoStateFromService(todo:Todo){
    try{
        console.log('todosss',todo)
      
        let query = `/api/todos/${todo.id}`
        const response = await axios.put(query,todo);
        return response;

    } catch(err){
        throw err;
    }
}


/**
 * @description service qui gére la recupération des todos complétés
 * @param {*}  
 * @returns  Promise
 */
export async function completedTaskFromService(){
    try{
        let query = `/api/todos/completed`
        const response = await axios.get(query);
        return response;

    } catch(err){
        throw err;
    }
}


/**
 * @description service qui gére la recupération des todos encours
 * @param {*}  
 * @returns  Promise
 */
export async function inprogressTaskFromService(){
    try{
        let query = `/api/todos/inprogress`
        const response = await axios.get(query);
        return response;

    } catch(err){
        throw err;
    }
}






















// export async function fetchDetailCommandeFromService(id_commande:string){
//     try{
//         console.log('id_commande',id_commande)
//         const response = await axios.get(`/api/detailcommande/${id_commande}`);
//         return response;

//     } catch(err){
//         throw err;
//     }
// }

// export async function validateCommandeFromService(commande:any){
//     try{
//         const response = await axios.put('/api/products/updateEtat',{body:commande});
//         console.log('reponse update',response)
//         return response
//     }catch(err){
//         throw err;
//     }
// }

// export async function sendMailFromService(item:any){
//      try{
//        const response = await axios.post('/api/sendMail',{header:{'Content-type':'application/json'},body:item});
//        return response;
//      }catch(err){
//         throw err;
//      }
// }