const express = require('express');
const api = express();
const mongoose = require('mongoose');

const fakeDB = require('./fakeDB')

const SeriesList = require('./SeriesListModel')

mongoose.connect('mongodb://localhost:27017/netflix', { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))



//? CORS:
api.use((req, res, next) => {
  res.set('ACCESS-CONTROL-ALLOW-ORIGIN', '*');
  res.set('ACCESS-CONTROL-ALLOW-HEADERS', '*');
  res.set('ACCESS-CONTROL-ALLOW-METHODS', '*');
  next();
});

api.get('/series', async (req, res, next) => {
  const series = await SeriesList.find()
  res.json(series);
});

// api.get('/:id', (req, res, next) => {
//     let id = req.params.id;
//     res.send(id)
// })

api.get('/seed', async (req, res, next) => {
  const graceSeasons = [
    {
      seasonNr: 1,
      seasonTitle: "First season",
      episodes: [
        {
          episodeNr: 1,
          episodeTitle: "First episode"
        },
        {
          episodeNr: 2,
          episodeTitle: "Second episode"
        },
        {
          episodeNr: 3,
          episodeTitle: "Third episode"
        }
      ]
    },
    {
      seasonNr: 2,
      seasonTitle: "Second season",
      episodes: [
        {
          episodeNr: 1,
          episodeTitle: "First episode"
        },
        {
          episodeNr: 2,
          episodeTitle: "Second episode"
        }
      ]
    }
  ]
  const madmenSeasons = [
    {
      seasonNr: 1,
      seasonTitle: 'First season',
      episodes: [
        {
          episodeNr: 1,
          episodeTitle: 'First episode'
        },
        {
          episodeNr: 2,
          episodeTitle: 'Second episode'
        },
        {
          episodeNr: 3,
          episodeTitle: 'Third episode'
        }
      ]
    },
    {
      seasonNr: 2,
      seasonTitle: 'Second season',
      episodes: [
        {
          episodeNr: 1,
          episodeTitle: 'First episode'
        },
        {
          episodeNr: 2,
          episodeTitle: 'Second episode'
        }
      ]
    }
  ];

  const buffySeasons = [
    {
      seasonNr: 1,
      seasonTitle: 'First season',
      episodes: [
        {
          episodeNr: 1,
          episodeTitle: 'First episode'
        },
        {
          episodeNr: 2,
          episodeTitle: 'Second episode'
        },
        {
          episodeNr: 3,
          episodeTitle: 'Third episode'
        }
      ]
    },
    {
      seasonNr: 2,
      seasonTitle: 'Second season',
      episodes: [
        {
          episodeNr: 1,
          episodeTitle: 'First episode'
        },
        {
          episodeNr: 2,
          episodeTitle: 'Second episode'
        }
      ]
    }
  ];
  const magiciansSeasons = [
    {
      seasonNr: 1,
      seasonTitle: 'First season',
      episodes: [
        {
          episodeNr: 1,
          episodeTitle: 'First episode'
        },
        {
          episodeNr: 2,
          episodeTitle: 'Second episode'
        },
        {
          episodeNr: 3,
          episodeTitle: 'Third episode'
        }
      ]
    },
    {
      seasonNr: 2,
      seasonTitle: 'Second season',
      episodes: [
        {
          episodeNr: 1,
          episodeTitle: 'First episode'
        },
        {
          episodeNr: 2,
          episodeTitle: 'Second episode'
        }
      ]
    }
  ];
  await new SeriesList(
    {
      title: "Grace & Frankie",
      description: "Grace and Frankie are two friends...",
      pic: "https://i.ytimg.com/vi/B3FnCMn1hx8/maxresdefault.jpg",
      seasons: graceSeasons
    }

    // {
    //     title: "Madmen",
    //     description: "Madmen is a serie about...",
    //     pic: "https://i0.wp.com/twogentlemen.cz/wp-content/uploads/2015/08/madmen.jpg?resize=696%2C385&ssl=1",
    //     seasons: madmenSeasons
    // }

    // {
    //   title: 'Buffy The Vampire Slayer',
    //   description: 'Buffy is a vampire fighting...',
    //   pic: 'https://i.ytimg.com/vi/uKq4SjCPzII/maxresdefault.jpg',
    //   seasons: buffySeasons
    // }

    // {
    //   title: 'The Magicians',
    //   description: 'Students of magic at Brakebills, a school for....',
    //   pic:
    //     'https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2020/01/the-magicians-season-5-key-art-julia-alice-margo-syfy.jpg?itok=5Ati7Cf3',
    //   seasons: magiciansSeasons
    // }
  ).save((err, data) => {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });

  console.log("Seed route called");
  res.send("Seed route")
})

/*
fetch('http://localhost:3000/')
.then(res => res.json())
.then(data => console.table(data.page[0]))
*/

// api.get('/serie', (req, res, next) => {
//   console.log(`Send serie from backend`);
//   res.send(`serie from backend`);
// });

// api.get('/episode', (req, res, next) => {
//   console.log(`Send episode from backend`);
//   res.send(`episode from backend`);
// });

const port = 4000;
api.listen(port, () => console.log(`Listening on port ${port}`))

