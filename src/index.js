
const PouchDB = require('pouchdb-core')
    .plugin(require('pouchdb-adapter-http'))
    .plugin(require('pouchdb-replication'))
    .plugin(require('pouchdb-mapreduce'))
    .plugin(require('pouchdb-find'))
    .plugin(require('pouchdb-size'))
    .plugin(require('pouchdb-adapter-sqlite-node'))
    .plugin(require('pouchdb-debug'));

const MPouchDB = PouchDB.defaults({
    adapter: 'webSQL',
    auto_compaction: true,
    revs_limit: 10,
})

const replDB = new MPouchDB('queue');
// replDB.installSizeWrapper();
// replDB.info().then(function (resp) {
//     //resp will contain disk_size
//     console.log(resp)
// })

const express = require('express');
const app = express();


app.use(require('express-pouchdb')(MPouchDB));

app.listen(3002, ()=>{
    console.log('Listen on port 3002');
})
