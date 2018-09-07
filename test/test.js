/*
bdd -> behavior driven development,
tdd -> test driven development,

Chai is a BDD / TDD assertion library for node
and the browser that can be delightfully paired with any javascript testing framework.
Chai has several interfaces that allow the developer to choose the most comfortable.
The chain-capable BDD styles provide an expressive language & readable style,
while the TDD assert style provides a more classical feel.
1.should
2.expect
3.assert
for more info go to
www.chaijs.com
 */
var assert = require('chai').assert;

var first = require('../main_test');

var add= require('../add');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;



//describe('name of the module we are testing ,function()')
//`describe()` is merely for grouping, which you can nest as deep
// - commonly known as test suites, which contains test cases
describe('test',function () {
    // `it()` is a test case
    it('first should return test successful ',function () {

            assert.equal(first(),'test successful');

    });
});


describe('add',function () {
    it('should add 5 and return 10', function () {
        var result=add(5);
        assert.equal(result,10);
    });


    it('should return of type number ',function () {

        var result = add(5);
        assert.typeOf(result,'number');

    })


});


/*
describe('Database Tests', function() {
    //Before starting the test, create a sandboxed database connection
    //Once a connection is established invoke done()
    before(function (done) {
        mongoose.connect('mongodb://localhost/cms_easyfreenotes');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function () {
            console.log('We are connected to test database!');
            done();
        });
    });
});
*/

var expect = require('chai').expect;

describe('Math', function() {
    describe('#abs()', function() {
        it('should return positive value of given negative number', function() {
            expect(Math.abs(-5)).to.be.equal(5);
        });
    });
});






var expect = require('chai').expect;
var Camo = require('camo');


describe('connectivity ', function() {

    var database = null;

    before(function(done) {
        Camo.connect('mongodb://localhost/testcopy').then(function(db) {
            database = db;
            return database.dropDatabase();
        }).then(function() {}).then(done, done);
    });


});