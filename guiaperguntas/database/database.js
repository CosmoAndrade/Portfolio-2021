const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root','2384',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;