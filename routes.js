const express = require("express");
const router = express.Router();
const path = require('path')
const {getHome, postHome, getOtherPage, getSet} = require('./controller')


router.get("/", getSet);
router.post("/", postHome);
router.get('/home', getHome)
router.get("/anotherOne", getOtherPage);

module.exports = {router}