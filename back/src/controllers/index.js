
const {
    fetchAllTodosFromService,
    deleteTodosFromService,
    updateTodosFromService,
    addTodosFromService,
    completedService,
    inprogressTodoService
} = require('../services')

/**
 * @description controlleur qui gére la récuperationn de tous les todos 
 * @param {req,res,next}  
 * @returns  Promise
 */
exports.fetchAllTodos = async (req,res,next) =>{

    try{
        const response = await fetchAllTodosFromService();
        return res.status(200).json(response)
    } catch(err){
       next(err);
    }
   
}

/**
 * @description controlleur qui gére la suppression d'un todo
 * @param {req,res,next}  
 * @returns  Promise
 */
exports.deleteTodo = async (req,res,next) =>{
     const {id} = req.params
     if(!id) {
        return res.status(400).json({ message: 'id est obligatoires !' });
    }
    try{
        const response = await deleteTodosFromService(id);
        return res.status(200).json(response)
    } catch(err){
       next(err);
    }
   
}

/**
 * @description controlleur qui gére la modification de l'état d'un todo
 * @param {req,res,next}  
 * @returns  Promise
 */
exports.updateTodo = async (req,res,next) =>{
    const {id} = req.params
    const body = req.body
   try{
       const response = await updateTodosFromService(id,body);
       return res.status(200).json(response)
   } catch(err){
      next(err);
   }
  
}


/**
 * @description controlleur qui gére l'insertion d'un nouveau todo
 * @param {req,res,next}  
 * @returns  Promise
 */
exports.addTodo = async (req,res,next) =>{
 
    const body = req.body;
    if(!req.body.name) {
        return res.status(400).json({ message: 'Le nom est obligatoires !' });
    }

   try{
       const response = await addTodosFromService(body);
       return res.status(200).json(response)
   } catch(err){
      next(err);
   }
  
}

/**
 * @description controlleur qui gére la recupération de tous les todos complétés
 * @param {req,res,next}  
 * @returns  Promise
 */
exports.completedTodo = async (req,res,next) =>{
   try{
       const response = await completedService();
       return res.status(200).json(response)
   } catch(err){
      next(err);
   }
  
}


/**
 * @description controlleur qui gére la recupération de tous les todos encours
 * @param {req,res,next}  
 * @returns  Promise
 */
exports.inprogressTodo = async (req,res,next) =>{
    try{
        const response = await inprogressTodoService();
        return res.status(200).json(response)
    } catch(err){
       next(err);
    }
   
 }






