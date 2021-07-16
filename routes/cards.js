import { Router } from 'express'
const router = Router()
import * as cardsCtrl from '../controllers/cards.js'

export { 
  router
}

router.get('/', cardsCtrl.index)
router.post('/', cardsCtrl.create)
router.post('/search', cardsCtrl.pokeSearch)