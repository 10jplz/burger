const connection = require('./connection');


const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if(err) {
                throw err; 
            }
            cb(result);
        });
    },

    insertOne(table, data, cb) {
        let queryString = `INSERT INTO ?? SET ?`;
        console.log(queryString);
        connection.query(queryString, vals, (err, result) => {
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