import { User } from '../models/user.js'

export {
  index,
  newUser as new,
  create,
  show
}

function show(req, res) {
  User.findById(req.params.id)
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