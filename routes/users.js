import { Router } from 'express'
const router = Router()
import * as usersCtrl from '../controllers/users.js'

export {
  router
}

router.get('/', usersCtrl.index)
router.get('/new', usersCtrl.new)
router.get('/:id', usersCtrl.show)
router.post('/', usersCtrl.create)
router.post('/:cardId/cards', usersCtrl.addCard)