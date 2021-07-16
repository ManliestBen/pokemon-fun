import { Card } from '../models/card.js'
import axios from 'axios'

export {
  pokeSearch,
  create,
  index
}

function index(req, res) {
  Card.find({})
  .then(cards => {
    res.render('cards/index', {
      cards
    })
  })
}

function create(req, res) {
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