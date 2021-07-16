import { Card } from '../models/card.js'
import axios from 'axios'

export {
  pokeSearch
}

function pokeSearch(req, res) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.query}`)
  .then(response => {
    console.log(response.data)
    res.redirect('/users')
  })
}