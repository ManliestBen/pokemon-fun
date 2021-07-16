import { Card } from '../models/card.js'
import { User } from '../models/user.js'
import axios from 'axios'

export {
  pokeSearch,
  create,
  index
}

function index(req, res) {
  Card.find({})
  .then(cards => {
    User.find({})
    .then(users => {
      res.render('cards/index', {
        cards,
        users
      })
    })
  })
}

function create(req, res) {
  req.body.holographic = !!req.body.holographic
  Card.create(req.body)
  .then(()=> {
    res.redirect('/cards')
  })
}

function pokeSearch(req, res) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.search}`)
  .then(response => {
    res.render('cards/search', {
      pokemon: response.data
    })
  })
}