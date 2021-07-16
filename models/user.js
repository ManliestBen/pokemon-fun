import mongoose from 'mongoose'

export {
  User
}

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  email: String,
  cards: [{type: Schema.Types.ObjectId, ref:"Card"}]
}, {
  timestamps: true
})


const User = mongoose.model('User', userSchema)
