const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

/*const databaseConfig = {
    'host': 'ec2-3-93-206-109.compute-1.amazonaws.com',
    'port': 5432,
    'database': 'df837vr2b8jq8a',
    'user': 'wnbzmmwbmopyix',
    'password': 'fcd144dfb42ff6e15744d385cd40efcd45caf4c4767838d9ec40ab0cd8ffe59d',
     "ssl":  { rejectUnauthorized: false }
};*/

const databaseConfig = { 
    connectionString:"postgres://wnbzmmwbmopyix:fcd144dfb42ff6e15744d385cd40efcd45caf4c4767838d9ec40ab0cd8ffe59d@ec2-3-93-206-109.compute-1.amazonaws.com:5432/df837vr2b8jq8a" , 
    ssl: { 
        rejectUnauthorized: false 
    } 
}

const db = pgp(databaseConfig);

module.exports = db;