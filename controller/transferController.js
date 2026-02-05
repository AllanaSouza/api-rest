const express  =  require('express');
const  router  =  express.Router();
const  {  transfer,  getTransfers  }  =  require('../service/transferService');

router.get('/',  (req,  res)  =>  {
    try  {
        const  list  =  getTransfers();
        return  res.status(200).json(list);
   }  catch  (err)  {
        return  res.status(500).json({  message:  'Erro  ao  listar  transferências'  });
    }
});

router.post('/',  (req,  res)  =>  {
    try  {
        const  { remetenteId,  destinatarioId,  valor  }  =  req.body;

        const  transferencia  =  transfer({
            remetenteId,
            destinatarioId,
            valor
       });

        return  res.status(201).json(transferencia);
    }  catch  (err)  {
        return  res.status(err.status  ||  500).json({  message:  err.message  });
    }
});

module.exports  =  router;

