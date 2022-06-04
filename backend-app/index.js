const express = require('express');
const connectionDB = require ('./config/db');
const cors = require('cors');

const app = express();
connectionDB();

app.use(cors());
app.use(express.json());

app.use('/api/VisitorData', require('./routes/visitorDataRouts') );

app.listen(4700, ()=>{
    console.log("Backend działa na porcie 4700");
})
