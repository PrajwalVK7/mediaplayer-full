

// import json-server package
const jsonServer = require('json-server');
//create json server
const mediaPlayerServer = jsonServer.create();
// create connection to db.json file
const router = jsonServer.router('db.json');
// create a middleware : Intermediate connection
const middleware = jsonServer.defaults()
//use this middleware
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router)

const port = 5000;
mediaPlayerServer.listen(port, () => {
    console.log(`json server is up and running in port ${port} `);
})

