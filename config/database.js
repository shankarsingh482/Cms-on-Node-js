if(process.env.NODE_ENV === 'production'){

    module.exports = require('./prod-database');

} else {
    module.exports = require('./dev-database');
}