import { Router } from 'express'
const router = Router()
import * as cardsCtrl from '../controllers/cards.js'

export { 
  router
}

router.post('/search', cardsCtrl.pokeSearch)