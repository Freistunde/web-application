var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var mysql = require('mysql');


//Database con

var con = mysql.createConnection({
  host: "freistunde.webhop.me",
  user: "webt2",
  password: "webt2t1",
  database: "freistunde"
});

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

var categoryData;

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM Kategorie", function (err, result, fields) {
      if (err) throw err;
      categoryData = result;
    });
  });

// GET /api/categories/
router.get('/', function(req,res, next) {

  /* TODO:
   * Get all Categories from DB
   */

  res.status(200).send(categoryData);
});

// GET /api/categories/img/:categoryid
router.get('/img/:categoryid', function(req, res, next) {

  var categoryID = req.params.categoryid;

  /* TODO:
   * Get the image for a specific categoryID and set below
   */

  var img;
  
  var sql = 'SELECT * FROM Kategorie WHERE Kat_ID = ' + categoryID;
 
  con.query(sql, function (err, sqlresult) {
  if (err) throw err;
  if (!sqlresult.length) res.status(400).send('No category found');   
	else img = sqlresult[0].imgUrl;
	console.log('Das ist das Bild:'+sqlresult[0].imgUrl);	
	
	if(img) {
	  res.status(200).sendfile('assets/'+img);
      //res.status(200).contentType('image').end(img, 'binary');
    } else {	  
      res.status(404).send('No image found');
    }
  });
   
 
});

// GET /api/categories/search/:query
router.get('/search/:query', function(req, res, next) {

  var q = req.params.query;

  /* TODO:
   * Search in DB in categories attributes for the above searchstring (q) and set below
   */

  var results;
  var sql = 'SELECT * FROM Kategorie WHERE Name Like \'%' + q +'%\'';
 
  con.query(sql, function (err, sqlresult) {
  if (err) throw err;
  if (!sqlresult.length) res.status(404).send('No category found');   
	else results = sqlresult;	
	
	if (results.length != -1) {
      res.status(200).send(results);
    } else {
      res.status(404).send('No categories found');
    }
  });

  
});

module.exports = router;
