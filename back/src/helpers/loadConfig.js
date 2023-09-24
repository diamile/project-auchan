const dotenv = require('dotenv');


exports.loadConfigData = () =>{
    
// Chargez les variables d'environnement en fonction de l'environnement actuel
if (process.env.NODE_ENV === 'development') {
    console.log('ici')
  dotenv.config({ path: './config/dev.json' });
} else if (process.env.NODE_ENV === 'preprod') {
  dotenv.config({ path: './config/preprod.json' });
} else if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: './config/prod.json' });
}
}