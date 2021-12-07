
const PouchDB = require('pouchdb-core')
    .plugin(require('pouchdb-adapter-http'))
    .plugin(require('pouchdb-replication'))
    .plugin(require('pouchdb-mapreduce'))
    .plugin(require('pouchdb-find'))
    .plugin(require('pouchdb-adapter-sqlite-node'))
    .plugin(require('pouchdb-debug'));

const MPouchDB = PouchDB.defaults({
    adapter: 'webSQL'
})

// const replDB = new MPouchDB('companyCards');

const express = require('express');
const app = express();


app.use(require('express-pouchdb')(MPouchDB));

app.listen(3002, ()=>{
    console.log('Listen on port 3002');
})
