 const orm = require('../config/orm');

const burger = {
        all(cb) {
            orm.all('burgers', (res) => cb(res));
        },
        
        insertOne(cols, vals, cb) {
            orm.insertOne('burgers', cols, vals, (res) => cb(res));
        }, 
        update(objColVals, condition, cb) {
            orm.update('burgers', objColVals, condition, (res) => cb(res));
        }
    }

    module.exports = burger;