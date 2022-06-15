const express = require('express')
const router = express.Router()
const data = require('../data')

router.route('/')
  .get((req, res) => {
    res.status(200).json({ result: data })
  })
  .post((req, res) => {
    const { name, alterEgo, firstAppearance, publisher } = req.body

    if(!name || !alterEgo || !firstAppearance || !publisher) {
      return res.status(400).json({ message: 'Invalid submission' })
    }

    const newHero = { name, alterEgo, firstAppearance, publisher }

    data.push(newHero)

    res.status(200).json({ result: data })
  })

router.route('/:index')
  .get((req, res) => {
    try {
      const index = req.params.index

      if(isNaN(index)) {
        return res.status(400).json({ message: 'Invalid index' })
      }

      if(index < 0 || index >= data.length) {
        return res.status(400).json({ message: 'Resource does not exist' })
      }

      res.status(200).json({ result: data[index] })
    } catch(error) {
      res.status(500).json({ message: 'Something unexpected happened' })
    }
  })
  .put((req, res) => {
    try {
      const index = req.params.index

      const { name, alterEgo, firstAppearance, publisher } = req.body
      
      if(isNaN(index)) {
        return res.status(400).json({ message: 'Invalid value for index' })
      }
      if(index < 0 || index >= data.length) {
        return res.status(400).json({ message: 'Resource does not exist' })
      }

      if(!name || !alterEgo || !firstAppearance || !publisher) {
        return res.status(400).json({ message: 'Invalid submission' })
      }
  
      const updatedHero = { name, alterEgo, firstAppearance, publisher }

      data[index] = updatedHero

      res.status(200).json({ result: data[index] })

    } catch (error) {
      res.status(500).json({ message: 'Something unexpected happened' })
    }
  })
  .delete((req, res) => {
    try {
      const index = req.params.index

      if(isNaN(index)) {
        return res.status(400).json({ message: 'Invalid value for index' })
      }

      if(index < 0 || index >= data.length) {
        return res.status(400).json({ message: 'Resource does not exist' })
      }

      const itemToDelete = data[index]

      data.splice(index, index+1)

      res.status(200).json({ result: itemToDelete })
    } catch (error) {
      res.status(500).json({ message: 'Something unexpected happened' })
    }
  })

module.exports = router