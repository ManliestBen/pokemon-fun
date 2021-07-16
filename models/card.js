import mongoose from 'mongoose'

export {
  Card
}

const Schema = mongoose.Schema


const abilitySchema = new Schema({
  name: {type: String, required: true},
  damageValue: Number,
  damageType: String,
  cost: Number,
  abilityUrl: String
}, {
  timestamps: true
})

const cardSchema = new Schema({
  name: {type: String, required: true},
  price: Number,
  type: String,
  holographic: Boolean,
  imgUrl: String,
  abilities: [abilitySchema],
  cardUrl: String
}, {
  timestamps: true
})


const Card = mongoose.model('Card', cardSchema)
