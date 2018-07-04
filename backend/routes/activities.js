var express = require('express');
var router = express.Router();
var mysql = require('mysql');


//Database con

var con = mysql.createConnection({
  host: "freistunde.webhop.me",
  user: "webt2",
  password: "webt2t1",
  database: "freistunde"
});

var activityData;

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Aktivität", function (err, result, fields) {
    if (err) throw err;
    activityData = result;
  });
});



var activityMock = [
  {
    title: "Hochschule",
    description: "Nicht so geil",
    duration: 30,
    voting: 4,
    id: "act1",
    coordinates: [7.270899, 51.447625],
    categoriesID: ["cat1", "cat2"]
  },
  {
    title: "Ruhr Uni",
    description: "Auch nicht so geil",
    duration: 30,
    voting: 4,
    id: "act2",
    coordinates: [7.262179, 51.443018],
    categoriesID: ["cat1", "cat2"]
  }
]

// GET /api/activities/
router.get('/', function(req, res, next) {

  /* TODO:
   * get all activities from the database
   */

  res.status(200).send(activityData);
});

// GET /api/activities/id/:id
router.get('/id/:id', function(req,res,next) {

  var activityID = req.params.id;

  /* TODO:
   * Search in database for an activityID and set below
   */

 
  var sql = 'SELECT * FROM Aktivität WHERE Aktivität_ID = ' + activityID;
 
  con.query(sql, function (err, activity) {
  if (err) throw err;
  if (!activity.length) res.status(400).send('No activity found');   
	else res.status(200).send(activity);	
  });
   
  
  /*
  var activity = activityMock.filter(x => x.id === activityID);
  */
  
  /*
  if(activity.length === 1) {
    res.status(200).send(activity[0]);
  } else if (activity.length > 1) {
    res.status(400).send('No unique id');
  } else {
    res.status(400).send('No activity found');
  }
    */

});

// GET /api/activities/place/:place
router.get('/place/:place', function(req,res,next) {

  var place = req.params.place;

  /* TODO:
   * Search in database for activities with value "place" (see above) and set it below.
   */
   var sql = 'SELECT Aktivität.* FROM Ort LEFT JOIN Aktivität ON Aktivität.Ort_ID = Ort.Ort_ID WHERE (Ort.Stadt = \''+place+'\')';
 
  con.query(sql, function (err, activities) {
  if (err) throw err;
  if(activities.length != -1) {
    res.status(200).send(activities);
  } else {
    res.status(400).send('No activity found');
  }	
  });
    
});

// GET /api/activities/duration/:duration
router.get('/duration/:duration', function(req,res,next) {

  var duration = req.params.duration;

  /* TODO:
   * Search in database for activities with a lower duration as the above and set it below.
   */

  var activities = [];

  if(activities.length != -1) {
    res.status(200).send(activities);
  } else {
    res.status(400).send('No activity found');
  }
});

module.exports = router;
