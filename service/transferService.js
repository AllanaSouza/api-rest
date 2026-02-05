 //  service/transferService.js
 const  {  users,  findUserById  }  =  require('./userService');
 const  {  getTransfers,  saveTransfer  }  =  require('../model/transferModel');
 
 function  transfer({  remetenteId,  destinatarioId, valor  })  {
     const  remetente  =  findUserById(remetenteId);
     const  destinatario  =  findUserById(destinatarioId);
 
     if  (!remetente  ||  !destinatario) {
         const  error  =  new  Error('Remetente  ou  destinatário  inválido');
         error.status  =  400;
        throw  error;
     }
 
     if  (valor  <=  0)  {
         const  error  = new  Error('Valor  deve  ser  maior  que  zero');
         error.status  =  400;
         throw  error;
    }
 
     if  (remetente.saldo  <  valor)  {
         const  error  =  new  Error('Saldo  insuficiente');
        error.status  =  400;
         throw  error;
     }
 
     const  isFavorecido  =  remetente.favorecidos.includes(destinatario.id);
 
    if  (!isFavorecido  &&  valor  >=  5000)  {
         const  error  =  new  Error(
            'Transferências  para  não  favorecidos  devem  ser  menores  que  R$  5.000,00'
         );
         error.status  = 400;
         throw  error;
     }
 
     remetente.saldo  -=  valor;
     destinatario.saldo  +=  valor;
 
    const  transferencia  =  {
         id:  getTransfers().length
             ?  getTransfers()[getTransfers().length  -  1].id +  1
             :  1,
         remetenteId,
         destinatarioId,
        valor,
         data:  new  Date().toISOString()
     };
 
     saveTransfer(transferencia);
     return  transferencia;
 }

 module.exports  =  {
     transfer,
     getTransfers
 };
