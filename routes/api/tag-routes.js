const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
router.get('/', async (req, res) => {
  try{
    const tags = await Tag.findAll({
      include:[{ model: Product, as: 'tagged_products' }]
    })
    res.status(200).json(tags)
  }catch(err){
    res.status(500).json(err)
  }
});

router.get('/:id', async(req, res) => {
  try{
    const tag = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include:[{model: Product, as: 'tagged_products' }]
    })
    res.status(200).json(tag)
  }catch(error){
    res.status(500).json(error)
  }
});

router.post('/', async(req, res) => {
  try{
    const tag = await Tag.create({
      tag_name: req.body.tag_name
    })
    res.status(200).json(tag)
  }catch(err){
    res.status(500).json(err)
  }
});

router.put('/:id', async(req, res) => {
  // updates a tag's name by its `id` value
  try{
    const tag = await Tag.update(req.body,
      { 
      where:{
        id: req.params.id
      }
    })
    res.status(200).json(tag)
  }catch(err){
    res.status(500).json(err)
  }
});

router.delete('/:id', async(req, res) => {
  // deletes one tag by its `id` value
  try{
    const tag = await Tag.destroy({ 
      where:{
        id: req.params.id
      },
      cascade: true
    })
    res.status(200).json(tag)
  }catch(err){
    res.status(500).json(err)
  }
});

module.exports = router;
