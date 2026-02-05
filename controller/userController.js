const  express  =  require('express');
const  router  =  express.Router();
const  {  listUsersController  }  =  require('../service/userService');

router.get('/',  (req,  res) =>  {
    try  {
        const  users  =  listUsersController();
        return  res.status(200).json(users);
    }  catch  (err)  {
        return  res.status(500).json({  message:  'Erro  ao  listar  usuários'  });
   }
});

module.exports  =  router;
