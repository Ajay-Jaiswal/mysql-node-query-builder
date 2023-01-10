const express = require('express'),
  router = express.Router();

  const cntr = require("./controller")

  router.get('/get', function(req,res){
    res.send({message: "you are fool" })
  })

router.get('/getdata', cntr.getdata)
router.get('/getalldata', cntr.getalldata)
router.post('/insertdata', cntr.insertdata)
router.put('/updatedata', cntr.updatedata)


module.exports = router;