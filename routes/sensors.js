var express = require('express');
var router = express.Router();
var service = require('../service/sensorService');

/* GET sensors listing. */
router.get('/', function(req, res, next) {
  var db = require('../config/database');
  var item = db.Mongoose.model('temperatura', db.ItemSchema, 'temperatura');
  item.find({}).lean().exec(function(e,docs){
    res.json(docs);
    res.end();
  });
});

router.post('/', function (req, res, next) {
  service.inserirNovoItem(req.body, res);
})

module.exports = router;
