import { User } from '../models/user.js'

export {
  index,
  newUser as new
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