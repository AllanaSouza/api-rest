const  express  =  require('express');
const  router  =  express.Router();
const  {  login  }  =  require('../service/authService');
const  {  createUser  }  = require('../service/userService');

router.post('/login',  (req,  res)  =>  {
    try  {
        const  result  =  login(req.body);
        return  res.status(200).json(result);
    }  catch  (err)  {
        return  res.status(err.status  || 500).json({  message:  err.message  });
    }
});

router.post('/register',  (req,  res)  =>  {
    try  {
        const  {  username,  password  }  =  req.body;

        if  (!username  ||  !password) {
            return  res.status(400).json({  message:  'username  e  password  são  obrigatórios'  });
        }

        const  user  =  createUser({  username,  password  });
        return res.status(201).json(user);
    }  catch  (err)  {
        return  res.status(err.status  ||  500).json({  message:  err.message  });
    }
});

module.exports  =  router;
