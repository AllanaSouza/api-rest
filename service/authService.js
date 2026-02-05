 //  service/authService.js
 const  {  findUserByUsername  }  =  require('./userService');
 
 function  login({  username,  password  })  {
     if  (!username  ||  !password) {
         const  error  =  new  Error('Login  e  senha  são  obrigatórios');
         error.status  =  400;
        throw  error;
     }
 
     const  user  =  findUserByUsername(username);
 
     if  (!user  ||  user.password !==  password)  {
         const  error  =  new  Error('Credenciais  inválidas');
         error.status  =  401;
        throw  error;
     }
 
     return  {
         userId:  user.id,
        token:  `fake-token-${user.id}`
     };
 }
 
 module.exports  =  {
     login
 };
