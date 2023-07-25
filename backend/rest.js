const express = require('express');

const app = express();

diaryEntries = [
    {id: 1, date: "July 1st", entry: "Entry 1"},
    {id: 2, date: "July 2nd", entry: "Entry 2"},
    {id: 3, date: "July 3rd", entry: "Entry 3"},
];

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/diary-entries', (req, res, next) => {

    res.json({'diaryEntries': diaryEntries});

});

module.exports = app;//