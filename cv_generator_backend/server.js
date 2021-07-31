const express = require('express');
const Sequelize = require('sequelize');
const x = require('body-parser');
const Cors = require('cors');
const fs = require('fs');
const app = express();

app.use(x.json());
app.use(Cors());
fs.readFileSync('./cv.sql');

const seq = new Sequelize('cv', 'root', '151516', {
    dialect: "mysql",
    host: "127.0.0.1"
});

const cvTable = seq.define('cv_data_table', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNULL: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    surname: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    email: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    schollName: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    collegeName: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    universityName: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    specificationdegree: {
        type: Sequelize.STRING,
        allowNULL: false
    },
},
{
    timestamps: false
});

module.exports = cvTable;
seq.sync({ force: true });

app.get('/', function (req, res) {
    cvTable.findAll().then(table_content => res.send(table_content));
});
app.post('/', async function (req, res) {
    await cvTable.create({ name: req.body.name },{surname: req.body.surname},{}).then(table => table.save());
    cvTable.findAll().then(table => res.send(table));
});
app.put('/', async function (req, res) {
    await cvTable.update({ name: req.body.name }, { where: { id: req.body.id } });
    cvTable.findAll().then(table => res.send(table));
});
app.delete('/', async function (req, res) {
    await cvTable.destroy({ where: { id: req.body.id } });
    cvTable.findAll().then(table => res.send(table));
});
app.listen(8082);