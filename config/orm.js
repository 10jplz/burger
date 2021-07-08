const { create } = require('express-handlebars');
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
        let queryString = `INSERT INTO ?? SET ?`;
        console.log(data);
        connection.query(queryString, [table, data], (err, result) => {
            if (err) {
                throw err; 
            }

            cb(result);
        })

    },
    update(table, id, cb) {
        let queryString = `UPDATE ?? SET devoured = 1  WHERE ?`;
        console.log(queryString);
        connection.query(queryString, [table, id], (err, result) => {
            if (err) {
                throw err; 
            }
            cb(result)
        })
    }
}
module.exports = orm;