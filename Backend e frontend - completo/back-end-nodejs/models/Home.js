const Sequelize = require('sequelize');
const db = require('./db');

const Home = db.define('homes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title_top_one: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title_top_two: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title_top_three: {
        type: Sequelize.STRING,
        allowNull: false
    },
    btn_title_top: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image_top:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ser_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ser_icon_one: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ser_title_one: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ser_desc_one: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ser_icon_two: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ser_title_two: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ser_desc_two: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ser_icon_three: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ser_title_three: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ser_desc_three: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cont_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cont_desc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cont_icon_emp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cont_title_emp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cont_name_emp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cont_icon_end: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cont_title_end: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cont_name_end: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cont_icon_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cont_title_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cont_name_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cont_title_form: {
        type: Sequelize.STRING,
        allowNull: false
    },
    footer_desc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    footer_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    footer_link: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Criar a tabela no BD
//Home.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//Home.sync({ alter: true });

module.exports = Home;