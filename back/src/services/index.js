
const database = require('../database/database.js')

/**
 * @description Récuperationn de tous les todos 
 * @param {*}  
 * @returns  Promise
 */
 async function fetchAllTodosFromService(){
    try{
        return await database.all(`select * from task ORDER BY id DESC `,[]);
    }
    catch(err){
       throw err;
    }
   
}

/**
 * @description fonction qui gére la suppression d'un todo 
 * @param {todoId}  
 * @returns  Promise
 */
 async function deleteTodosFromService(todoId){
    let query = "DELETE FROM task WHERE id=";
    query+=todoId

    try{
        return await database.delete(query,[]);
    }
    catch(err){
       throw err;
    }
}

/**
 * @description fonction qui gére la modification de l'état d'un todos
 * @param {todoId,body}  
 * @returns  Promise
 */

async function updateTodosFromService(todoId,body){
    let etat = body.etat === "encours" ? "termine" : "encours"
    const updateQuery = `
        UPDATE task
        SET  etat = $1
        WHERE id = $2
    `;

    try{
        return await database.update(updateQuery, [etat, todoId]);
    }
    catch(err){
       throw err;
    }
}


/**
 * @description fonction qui gére l'insertion d'un nouveau todo
 * @param {todoId,body}  
 * @returns  Promise
 */

async function addTodosFromService(body){
    const { name } = body;
    const etat = "encours"

    const insertQuery = `
      INSERT INTO task (name,etat)
      VALUES ($1,$2)
    `;

    try{
        return await database.add(insertQuery, [name,etat]);
    }
    catch(err){
       throw err;
    }
}

/**
 * @description fonction qui gére la recupération de  tous les todos terminés
 * @param {todoId,body}  
 * @returns  Promise
 */
async function completedService(){
    const query = `SELECT * FROM task WHERE etat = 'termine'`;
    try{
        const res= await database.all(query, []);
        return res;
    }
    catch(err){
       throw err;
    }
}


/**
 * @description fonction qui gére la recupération de tous les todos encours
 * @param {todoId,body}  
 * @returns  Promise
 */
async function inprogressTodoService(){
    const query = `SELECT * FROM task WHERE etat = 'encours'`;
    try{
        const res= await database.all(query, []);
        return res;
    }
    catch(err){
       throw err;
    }
}


exports.fetchAllTodosFromService = fetchAllTodosFromService;
exports.deleteTodosFromService = deleteTodosFromService;
exports.updateTodosFromService = updateTodosFromService;
exports.addTodosFromService = addTodosFromService;
exports.completedService = completedService;
exports.inprogressTodoService=inprogressTodoService;

 
