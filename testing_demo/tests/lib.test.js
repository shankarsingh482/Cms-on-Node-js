
const lib = require('../lib');

const db = require('../db');

//to match number.

describe('absolute',()=>{


    //to matches the number is +ve number or not.
    it ('Absolute Test case should return a +ve number if number is +ve number  ',()=>{

        const result = lib.absolute(854);
        //in mocha we use assert while in jest we use expect and a matcher function
        expect(result).toBe(854);

    });

//more information for matcher function we use


//https://jestjs.io/docs/en/using-matchers

// to match -ve number.

    it ('Absolute Test case return a + ve number if number is -ve number',()=>{

        const result= lib.absolute(-100);

        expect(result).toBe(100);

    });




    it ('Absolute Test case return a 0 if number is 0',()=>{

        const result= lib.absolute(0);

        expect(result).toBe(0);

    });





});


//to match string.

describe('greet',()=>{

    it('should return the greeting message ',() =>{

        //but this have limitation as it is very consise alternate way is to use regx.
        /*
        const result = lib.greet('Shankar');
        expect(result).toBe('Welcome Shankar');
        */

        const result = lib.greet('Shankar');
        expect(result).toMatch(/Shankar/);

        /* if dont want to use regx then you can use toContinue

        const result = lib.greet('Shankar');
        expect(result).toContinue('Shankar');

         */



    });

});

//array

describe('getCurrencies',()=>{

   it('should return suppported currencies',()=>{


       const result= lib.getCurrencies();


       //to general

       expect(result).toBeDefined();
       expect(result).not.toBeNull();

       //to specific.

       expect(result[0]).toBe('USD');
       expect(result[1]).toBe('AUD');
       expect(result[2]).toBe('EUR');
       expect(result[3]).toBe('RS');


       //proper way

       expect(result).toContain('USD');

       expect(result).toContain('AUD');

       expect(result).toContain('EUR');

       expect(result).toContain('RS');

       //cleaner way of doing

       expect(result).toEqual(expect.arrayContaining(['EUR','USD','RS','AUD']));

       // for more info go to the https://facebook.github.io/jest/


   });





});

//object

describe('getProduct',()=>{

   it('should return the product with the given id',()=>{

       //this test will fail using  this test case because obejct are placed on different locations
       // and we are using refrences of the object here becuase of toBe
       // instead of toBe we should use toEqual.

      const result =  lib.getProduct(1);
        /*
                expect(result).toBe({id:1,price:10});
        */
        expect(result).toEqual({id:1,price:10});

        //this is more generalised as it test only partciular requested format.

        expect(result).toMatchObject({id:1,price:10});

       //to look for property
       // expect((result).toHaveProperty('id','1'));
});

});



//checking registration of user..


describe('registerUser',()=>{

   it('should throw if username is falsy',()=>{

//Null
//undefined
//Nan
//''
//0
//false

const args =[null,undefined,NaN,'',0,false];
args.forEach(a=>{
    expect(()=> {lib.registerUser(a)}).toThrow();


        });

   });

//if user is registered.
    it('should return a user object if valid username is passed',()=>{

      const result=  lib.registerUser('shankar');

      expect(result).toMatchObject({username:'shankar'});

      expect(result.id).toBeGreaterThan(0);

    });

});


//apply discount
describe('applyDiscount',()=>{

   it('should apply 10 % discount if customer has more than 10 point',()=>{


       db.getCustomerSync= function(customerId)
       {
           console.log('reading customer record from db')
           return {id:customerId,points:20}

       }

       const order = { customerId: 1,totalPrice: 10};
       lib.applyDiscount(order);
       expect(order.totalPrice).toBe(9);
   });


});