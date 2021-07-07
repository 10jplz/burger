const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data, 

        };
        console.log("controller",  hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    console.log("Adding Burger", req.body)
    burger.create(req.body, (result) => {
        res.json({ id: result.insertId })
    });
});

router.put('/api/burgers/:id', (req, res) => {
    burger.update(
        
        { devoured: req.body.devoured}, 
        { id: req.params.id},
        (result) => {
            if (result.changeRows === 0 ) {
                return res.status(404).end();
            }
            res.status(200).end();  
          }   
    );
});

module.exports = router; 