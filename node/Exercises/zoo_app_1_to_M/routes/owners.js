'use strict'

const express = require("express")
const router = express.Router()
const helpers = require('../helpers/findHelpers')

global.owners = []
var id = 1

router.get('/', (req,res) => {
  res.render("owners/index", {owners})
})

router.get('/new', (req,res) => {
  res.render("owners/new", {val: "Add"})
})

router.get('/:id', (req,res) => {
  const owner = helpers.findOne(owners,req.params.id)
  res.render("owners/show")
})

router.get('/:id/edit', (req,res) => {
  const owner = helpers.findOne(owners,req.params.id)
  res.render("owners/edit",{owner, val: "Edit"})
})

router.post('/', (req,res) => {
  let owner = Object.assign({},req.body.owner, {id})
  id++
  owners.push(owner)
  res.redirect('/owners')
})

router.patch('/:id', (req,res) => {
  let owner = helpers.findOne(owners,req.params.id)
  owner = Object.assign(owner, req.body.owner)
  res.redirect('/owners')
})

router.delete('/:id', (req,res) => {
  const index = helpers.findIndex(owners,req.params.id)
  owners.splice(index,1)
  global.zoos = global.zoos.filter(zoo => zoo.owner_id !== +req.params.id)
  res.redirect('/owners')
})

module.exports = router;