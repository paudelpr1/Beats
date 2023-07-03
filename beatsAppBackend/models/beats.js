const mongoose = require('mongoose');

const beatsSchema = new mongoose.Schema({
    title : { type: String},
    artist : { type: String},
    genre : { type: String},
    url: {
        type: String,
        validate: {
          validator: function (value) {
            const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
            return urlRegex.test(value);
          },
          message: 'Invalid URL format',
        },
      },
})

module.exports = mongoose.model('Beats', beatsSchema)