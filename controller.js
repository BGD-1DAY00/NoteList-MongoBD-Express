const path = require("path");

const getSet = (req, res) => {
  console.log('jsklf')
  res.sendFile(path.join(__dirname, "./public/index.html"));
};
const postHome = (req, res) => {
  console.log(req)
  console.log(res)
  res.send('hello')
};
const getHome = (req, res) => {
  res.sendFile(path.join(__dirname, "./public/home.html"));
};
const getOtherPage = (req, res) => {
  res.sendFile(path.join(__dirname, "./public/anotherOne.html"));
};

module.exports = { getHome, postHome, getOtherPage, getSet };
