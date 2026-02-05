//  service/userService.js
const  {  users,  saveUser  }  =  require('../model/userModel');

function  getAllUsers()  {
    return users;
}

function  findUserByUsername(username)  {
    return  users.find(u  =>  u.username  ===  username);
}

function  findUserById(id)  {
    return users.find(u  =>  u.id  ===  id);
}

function  createUser({  username,  password  })  {
    const  existing  =  findUserByUsername(username);

   if  (existing)  {
        const  error  =  new  Error('Usuário  já  existe');
        error.status  =  400;
       throw  error;
    }

    const  newUser  =  {
        id:  users.length  ? users[users.length  -  1].id  +  1  :  1,
        username,
        password,
        favorecidos: [],
        saldo:  0
    };

    saveUser(newUser);
    return  newUser;
}

module.exports  = {
    getAllUsers,
    findUserByUsername,
    findUserById,
    createUser
};
