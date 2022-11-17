const express =require ('express')
var typo = require("typo-js");
const dics = new typo('en_US')

//cheaking spelling mistakes or not
const spelCheck = (req, res) => {
  try {
    const { result } = req.body;
    let ar = result.split(" ");
    let mismatched = [];
    let suggestion = [];
    ar.forEach((data) => {
      let is_correct = dics.check(data);
      if (is_correct === false) {
        let resp = dics.suggest(data);
        suggestion.push(resp);
        mismatched.push(data);
        console.log(resp);
      }
    });
    res.status(200).json({
      Mismatched: mismatched,
      Suggestion: suggestion,
    });
  } catch (error) {
    res.status(400).json({
      Error: error,
      Message: "Error",
    });
  }
};

module.exports = {
  spelCheck,
};