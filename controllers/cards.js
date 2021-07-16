import { Card } from '../models/card.js'
import axios from 'axios'

export {
  pokeSearch
}

function pokeSearch(req, res) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.search}`)
  .then(response => {
    res.render('cards/search', {
      pokemon: response.data
    })
  })
}