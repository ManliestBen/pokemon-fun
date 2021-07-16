import { Router } from 'express'
const router = Router()
import * as usersCtrl from '../controllers/users.js'

export {
  router
}

router.get('/', usersCtrl.index)
router.get('/new', usersCtrl.new)