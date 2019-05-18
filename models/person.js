const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// mongoose.set('useFindAndModify', false)
// mongoose.set('useCreateIndex', true)

const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    unique: true
  },
  number: {
    type: String,
    required: true,
    minlength: 8,
  }
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Person', personSchema)
