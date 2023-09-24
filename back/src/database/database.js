const {Client} = require('pg');

const {appConfig} = require('../configs')

let database = {};

if(process.env.NODE_ENV == "development"){
  require('dotenv').config({ path: `../../.env.dev` });
}


// Mise en place de la configuration de la base de données

if(appConfig.NODE_ENV == "development"){
  const db = new Client({
      host:appConfig.HOST,
      user:appConfig.DB_USER,
      port:appConfig.DB_PORT,
      password:appConfig.DB_PASS,
      database:appConfig.DB_NAME
  })

  database.db = db;
  database.connect = ()=> db.connect();

}


//initialisation de la table task
const CREATE_TASK_TABLE = "CREATE TABLE IF NOT EXISTS task ( id SERIAL PRIMARY KEY,name VARCHAR(255) NOT NULL, etat VARCHAR(50));"

// initilaisation de la table task
database.init = () =>{
    database.db.query(CREATE_TASK_TABLE,(err,res)=>{
        if(!err){
            console.log('task table is successfully created')
        }else{
            console.log('err',err)
        }
    })
}

database.init();


//fonction qui gére toutes les requétes select 
database.all = async(sql,options)=>{
    return new Promise((resolve,reject)=>{
         database.db.query(sql,options,(err,res)=>{
             if(!err){
               
                resolve(res.rows);
             }else{
                console.log(err.message);
                reject(err.message)
             }
  
             
         })
    })
  }
  


//fonction qui gére l'insertion
database.add = async function (sql,options) {
  request(sql,options)
};


//fonction qui gére la mise à jours 
database.update = async function (sql,options) {
  request(sql,options)
};

//fonction qui gére la suppression
database.delete = async function (sql,options) {
  request(sql,options)
};

const request = (sql,options)=>{
  return new Promise((resolve,reject)=>{
    database.db.query(sql,options,(err,res)=>{
        if(!err){
           resolve(res.rows);
        }else{
           reject(err.message)
        }

        
    })
})
}




module.exports = database