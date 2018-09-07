module.exports.getCustomerSync = function (id) {

    console.log('Reading a customer fron MongoDb');
    return {id: id,points:11};
}


module.exports.getCusttomer = async function (id) {


    return new Promise((resolve,reject)=>{

       console.log('Reading a customer from Mongodb.....');
       resolve({id:id,points:11});
    });

    
}