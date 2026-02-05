// model/transferModel.js

//  Banco  em  memória
let  transfers  =  [];

function  getTransfers()  {
    return  transfers;
}

function  saveTransfer(transfer) {
    transfers.push(transfer);
}

module.exports  =  {
    transfers,
    getTransfers,
    saveTransfer
};
