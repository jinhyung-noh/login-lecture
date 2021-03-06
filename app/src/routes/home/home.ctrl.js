"use strict"

const User = require("../../models/User");


const output = {
    home: (req, res) => {    // callback function: request랑 reponse
        res.render("home/index");
    },
    login: (req, res) => {   // "/login"에서 "/"는 꼭 넣어준다!
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
};

module.exports = {
    output,
    process,
}