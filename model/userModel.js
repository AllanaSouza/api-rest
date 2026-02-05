//  model/userModel.js

//  Banco  em  memória
let  users  =  [
    {
       id:  1,
        username:  'admin',
        password:  'admin123',
        favorecidos: [2],
        saldo:  100000
    },
    {
        id:  2,
       username:  'cliente',
        password:  'cliente123',
        favorecidos:  [],
        saldo:  5000
   }
];

function  getUsers()  {
    return  users;
}

function  saveUser(user)  {
    users.push(user);
}

module.exports =  {
    users,
    getUsers,
    saveUser
};
