'use strict'

const express = require("express")
const router = express.Router({mergeParams:true})
const helpers = require('../helpers/findHelpers')

global.zoos = []
var id = 1

router.get('/', (req,res) => {
  const owner = helpers.findOne(owners,req.params.owner_id)
  res.render("zoos/index", {zoos, owner})
})

router.get('/new', (req,res) => {
  const owner = helpers.findOne(owners,req.params.owner_id)
  res.render("zoos/new", {val: "Add", owner})
})

router.get('/:id', (req,res) => {
  const zoo = helpers.findOne(owners,req.params.id)
  res.render("zoos/show", {owner: zoo.owner, zoo})
})

router.get('/:id/edit', (req,res) => {
  const zoo = helpers.findOne(zoos,req.params.id)
  res.render("zoos/edit",{zoo, val: "Edit"})
})

router.post('/', (req,res) => {
  let zoo = Object.assign({},req.body.zoo, {id})
  zoo.owner_id = +req.params.owner_id
  id++
  zoos.push(zoo)
  res.redirect(`/owners/${zoo.owner_id}/zoos`)
})

router.patch('/:id', (req,res) => {
  let zoo = helpers.findOne(zoos,req.params.id)
  zoo = Object.assign(zoo, req.body.zoo)
  res.redirect(`/owners/${zoo.owner_id}/zoos`)
})

router.delete('/:id', (req,res) => {
  const zoo = helpers.findOne(zoos,req.params.id)
  zoos.splice(zoo,1)
  res.redirect(`/owners/${zoo.owner_id}/zoos`)
})

module.exports = router;
