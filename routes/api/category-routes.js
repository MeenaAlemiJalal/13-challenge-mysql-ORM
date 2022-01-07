const router = require('express').Router();
const { castArray } = require('lodash');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    const categories = await Category.findAll({
      include:[{ model: Product }]
    })
    res.status(200).json(categories)
  }catch(err){
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try{
    const category = await Category.findOne({
      where: {
        id: req.params.id
      },
      include:[{model: Product}]
    })
    res.status(200).json(category)
  }catch(error){
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  try{
    const category = await Category.create({
      category_name: req.body.category_name
    })
    res.status(200).json(category)
  }catch(err){
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try{
    const category = await Category.update(req.body,
      { 
      where:{
        id: req.params.id
      }
    })
    res.status(200).json(category)
  }catch(err){
    res.status(500).json(err)
  }

});

router.delete('/:id', async (req, res) => {
  try{
    const category = await Category.destroy({ 
      where:{
        id: req.params.id
      },
      cascade: true
    })
    res.status(200).json(category)
  }catch(err){
    res.status(500).json(err)
  }
});

module.exports = router;
