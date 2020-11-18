const Item = require('../models/products');

const env = require('../DB')
const jwt = require('jsonwebtoken');

exports.findProduct = function (request, response) {

  Item.find({}, (err, data) => {

    if (err) throw err;

    return response.json(data)
  })
}

exports.StoreProductInfo = function(request, response){

  let nItem = new Item({

    _id: request.body._id,

    name: request.body.name,

    price: request.body.price,

    photo: request.body.photo

  })

  nItem.save((err, result) => {
    if (err) throw err;
    response.json({ "msg": "saved success" });
    // response.send("Stored successfully " + result);
  })
}


exports.UpdateProduct = function(request, response){

  var id = request.body._id;

  var updatename= request.body.name;

  var updateprice= request.body.price;

  var updatephoto= request.body.photo;

  Item.update({ _id: id }, { $set: { name: updatename, price: updateprice, photo: updatephoto } }, (err, result) => {

      if (err) throw err;

      if(result.nModified>0){
      response.json({"msg":"Updated Successfully"});

      }else response.json({"msg":"records not present"});

  })

}

exports.DeleteProduct = function(request,response) {

  var deleteId = request.params.id;

  Item.deleteOne({_id:deleteId},(err,result)=>{
      if(err) throw err;
      if(result.deletedCount>0){
          response.json({"msg":"Delete successful"});
      }else{
      response.send({"msg":"No records"});
      }
  })
}

exports.getProductById = (request, response) => {

  var get_data = request.params.id;

  console.log("-------" + get_data);

  Item.find({ _id: get_data }, (err, data) => {

      if (err) throw err;

      response.json(data);
  })

}






