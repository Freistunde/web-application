var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

var categoryMock = [
  {
    id: "cat1",
    title: "Kategorie 1",
    imgUrl: "categories/category1.jpg",
    description: "Some text",
    childs: ["act1", "act2"]
  },
  {
    id: "cat2",
    title: "Kategorie 2",
    imgUrl: "categories/category2.jpg",
    childs: ["act1", "act2"]
  },
  {
    id: "cat3",
    title: "Kategorie 3",
    imgUrl: "categories/category3.jpg",
    description: "Some text",
    childs: ["act1", "act2"]
  },
  {
    id: "cat4",
    title: "Kategorie 4",
    imgUrl: "categories/category4.jpg",
    description: "Some text",
    childs: ["act1", "act2"]
  },
  {
    id: "cat5",
    title: "Kategorie 5",
    imgUrl: "categories/category5.jpg",
    description: "Some text",
    childs: ["act1", "act2"]
  },
  {
    id: "cat6",
    title: "Kategorie 6",
    imgUrl: "categories/category6.jpg",
    description: "Some text",
    childs: ["act1", "act2"]
  },
  {
    id: "cat7",
    title: "Kategorie 7",
    imgUrl: "categories/category6.jpg",
    childs: ["act1", "act2"]
  },
  {
    id: "cat8",
    title: "Kategorie 8",
    imgUrl: "categories/category6.jpg",
    description: "Some text",
    childs: ["act1", "act2"]
  },
  {
    id: "cat9",
    title: "Kategorie 9",
    imgUrl: "categories/category6.jpg",
    childs: ["act1", "act2"]
  },
  {
    id: "cat10",
    title: "Kategorie 10",
    imgUrl: "categories/category6.jpg",
    description: "Some text",
    childs: ["act1", "act2"]
  }
];

// GET /api/categories/
router.get('/', function(req,res, next) {

  /* TODO:
   * Get all Categories from DB
   */

  res.status(200).send(categoryMock);
});

// GET /api/categories/img/:categoryid
router.get('/img/:categoryid', function(req, res, next) {

  var categoryID = req.params.categoryid;

  /* TODO:
   * Get the image for a specific categoryID and set below
   */

  var img;

  if(img) {
    res.status(200).contentType('image').end(img, 'binary');
  } else {
    res.status(404).send('No image found');
  }
});

// GET /api/categories/search/:query
router.get('/search/:query', function(req, res, next) {

  var q = req.params.query;

  /* TODO:
   * Search in DB in categories attributes for the above searchstring (q) and set below
   */

  var results;

  if (results.length != -1) {
    res.status(200).send(results);
  } else {
    res.status(404).send('No categories found');
  }
});

module.exports = router;
