//testing numbers
module.exports.absolute = function (number) {

    /*
    if(number>0) return number;
    if(number<0) return -number;
    return 0;

    */
    //other way
/*
    if(number>=0) return number
    if(number<0) return -number

*/
//using conditional statements.
return (number>=0 ? number : -number);

}


//testing strings


//it greet the string.
module.exports.greet = function(name)
{
    return "Welcome " + name;
}


//testing of an array.


module.exports.getCurrencies = function () {

    return ['USD','AUD','EUR','RS']
}

//testing of an object.

module.exports.getProduct= function (productId) {
    return { id: productId,price:10};
    
}

//testing exceptions ..

module.exports.registerUser = function (username) {

    if(!username) throw new Error ('Username is required');

    return {id: new Date().getTime(), username:username}
}

// to make execution on its own we use 'jest --watchAll' instead of 'jest '


//mock functions..

const db  = require('./db');

module.exports.applyDiscount = function (order) {
//if we try to execute external links using unit tesing its integration testing
    const customer = db.getCustomerSync(order.customerId);

    if(customer.points>10)
        order.totalPrice *=0.9;

}

