// import express from 'express';
// import { Liquid } from 'liquidjs';

// const app = express();
// const engine = new Liquid();

// const apiUrl = "https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[squads][squad_id][cohort][_eq]=2627&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%202%27";

// app.use(express.urlencoded({extended: true}))

// app.engine('liquid', engine.express());
// app.set('views', './views');
// app.set('view engine', 'liquid');

// app.get('/', (req, res) => {
//   const personResponse = await fetch(apiUrl);
//   const personResponseJSON = await personResponseJSON();

//   res.render('index.liquid', {person: personResponseJSON.data});
// });


// app.listen(3000, () => {
//   console.log('Server is running at http://localhost:3000');
// });

import express from 'express';
import { Liquid } from 'liquidjs';

const app = express();
const engine = new Liquid();

const apiUrl = "https://fdnd.directus.app/items/person?fields=&filter[squads][squad_id][cohort][_eq]=2627";
// standard https://fdnd.directus.app/items/person?fields=&filter[squads][squad_id][cohort][_eq]=2627
// filter on name: https://fdnd.directus.app/items/person?fields=name&filter[squads][squad_id][cohort][_eq]=2627



app.use(express.urlencoded({ extended: true }));

app.engine('liquid', engine.express());
app.set('views', './views');
app.set('view engine', 'liquid');

app.get('/', async (req, res) => {
  const personResponse = await fetch(apiUrl);
  const personResponseJSON = await personResponse.json();

  res.render('index.liquid', {
    persons: personResponseJSON.data
  });
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});