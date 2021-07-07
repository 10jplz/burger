const connection = require('./connection');


const orm = {
    all(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if(err) {
                throw err; 
            }
            cb(result);
        });
    },

    create(table, data, cb) {
        let queryString = `INSERT INTO ?? SET burger_name = ?`;
        console.log(queryString);
        connection.query(queryString, [table, data], (err, result) => {
            if (err) {
                throw err; 
            }

            cb(result);
        })

    },
    update(table, objColVals, condition, db) {
        let queryString = `UPDATE ?? SET ? WHERE ?`;
        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err; 
            }
            cb(result)
        })
    }
}
module.exports = orm;