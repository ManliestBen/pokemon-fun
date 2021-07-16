import { User } from '../models/user.js'
import { Card } from '../models/card.js'

export {
  index,
  newUser as new,
  create,
  show,
  addCard
}

function addCard(req, res) {
  User.findById(req.body.userId)
  .then(user => {
    user.cards.push(req.params.cardId)
    user.save()
    .then(()=> {
      res.redirect(`/users/${user._id}`)
    })
  })
}

function show(req, res) {
  User.findById(req.params.id)
  .populate('cards')
  .then(user => {
    res.render('users/show', {
      user
    })
  })
}

function create(req, res) {
  User.create(req.body)
  .then(()=> {
    res.redirect('/users')
  })
}

function newUser(req, res) {
  res.render('users/new')
}

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', {
      users
    })
  })
  .catch(err => {
    console.log(err)
  })
}