const mongoose = require('mongoose');

const serieSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  pic: {
    type: String,
    required: true
  },
  seasons: [
    {
      seasonNr: {
        type: Number,
        require: true
      },
      seasonTitle: {
        type: String,
        require: true
      },
      episodes: [
        {
          episodeNr: {
            type: Number,
            require: true
          },
          episodeTitle: {
            type: String,
            require: true
          }
        }
      ]
    }
  ]
});

const SeriesList = mongoose.model('SeriesList', serieSchema)

module.exports = SeriesList;