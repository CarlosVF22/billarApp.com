const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');

const SalesService = require('../services/salesService');
const {createSaleSchema} = require('./../schemas/salesSchema');

const router = express.Router();
const service = new SalesService();

router.get('/', async (req,res) => {
    const sales = await service.find();
    res.json(sales);
});

router.post('/',
    validatorHandler(createSaleSchema, 'body'),
    async (req,res,next) => {
        try{
            const body = req.body;
            const newSale = await service.create(body);
            res.status(201).json(newSale);
        } catch(error){
            next(error);
        }
    }
);

module.exports = router;