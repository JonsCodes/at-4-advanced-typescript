const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  pic: { type: String, default: '/images/outside.jpg' },
  cuisines: [{ type: String, required: true }],
  city: { type: String, default: 'Anytown', trim: true },
  state: { type: String, default: 'USA', trim: true },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true })

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)


// module.exports = [{
//     name: 'H-Thai-ML',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: '/images/dog2.jpg'
//       }, {
//         name: 'Coding Dog Cafe',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'Coffee, Bakery',
//         pic: '/images/dog.png'
// }]
//https://www.lostdogcafe.com/wp-content/uploads/2017/10/ldcafe-trademarkblue.png 
//https://bloximages.chicago2.vip.townnews.com/bgdailynews.com/content/tncms/assets/v3/editorial/6/2a/62a7c38e-2251-5f19-8e67-6e84658552d2/6298fe9ec0bb7.image.jpg?resize=306%2C306