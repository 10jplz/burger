 const orm = require('../config/orm');

const burger = {
        all(cb) {
            orm.all('burgers', (res) => cb(res));
        },
        
        create(cols, vals, cb) {
            orm.create('burgers', cols, vals, (res) => cb(res));
        }, 
        update(objColVals, condition, cb) {
            console.log(objColVals, condition)
            orm.update('burgers', condition, cb);
        }
    }

    module.exports = burger;