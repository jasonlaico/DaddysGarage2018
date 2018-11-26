// function getTools(req,res){
//     req.app.get("db")
//         .get_tools().then(response=>{
//             res.status(200).json(response);
            
//         }).catch(err=>console.log(err))
        
// }

// function addTool(req,res){
//     //console.log(req.app.get("db"))
// req.
// app.get("db").Tools.insert({
//     price: req.body.price,
//     brand: req.body.brand,
//     model: req.body.model,
//     description: req.body.description,
//     S3_image: req.body.S3_image,
//     day_price:req.body.day_price,
//     hour_price: req.body.hour_price,
//     week_price: req.body.week_price,
//     deposit: req.body.deposit,
//     available: req.body.available,
//     first_name: req.body.first_name,
//     rating:req.body.rating
   

//     }, function(err, res) {
//         console.log(err)
//     });
//     res.sendStatus(200);
// }

// function updateTool(req,res){
//     //console.log(req.app.get("db"))
// req.
// app.get("db").Tools.insert({
//     price: req.body.price,
//     brand: req.body.brand,
//     model: req.body.model,
//     description: req.body.description,
//     S3_image: req.body.S3_image,
//     day_price:req.body.day_price,
//     hour_price: req.body.hour_price,
//     week_price: req.body.week_price,
//     deposit: req.body.deposit,
//     available: req.body.available,
//     first_name: req.body.first_name,
//     rating:req.body.rating
   

//     }, function(err, res) {
//         console.log(err)
//     });
//     res.sendStatus(200);
// }
// function removeTool(req,res){
//      req.app
//         .get("db")
//         .delete_tool(req.params.id)
//         .then(response=>{
//             res.sendStatus(200)
//         })
//         .catch(err=>res.status(500).json(err));
// }

// module.exports={
//     getTools,
//     addTool,
//     removeTool,
//     updateTool
// }