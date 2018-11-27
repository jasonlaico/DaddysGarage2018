require("dotenv").config();
const express = require("express"),
  app = express(),
  { SESSION_SECRET: secret, CONNECTION_STRING, PORT, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env,
  port = PORT || 3001,
  { sendEmail } = require("./controllers/emailCtrl"),
  session = require("express-session"),
  massive = require("massive"),
  { json } = require("body-parser"),
  cors = require("cors"),
  authCtrl = require("./controllers/authCtrl"),
  // masterRoutes = require("./masterRoutes"),
  controllers = require("./controllers/controller.js");
  const AWS = require("aws-sdk");

  // const app = require("express")();
  const stripe = require("stripe")(process.env.STRIPE_KEY);
  
  app.use(require("body-parser").text());

app.use(json());
app.use(cors());
app.use(
  session({
    secret,
    saveUninitialized: true,
    resave: false
  })
);
massive(CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(console.warn);

authCtrl(app);
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY
})

app.use('/s3', require('react-s3-uploader/s3router')({
  bucket: 'devmountainjason',                           // required
  region: 'us-east-1',                            // optional
  headers: {'Access-Control-Allow-Origin': '*'},  // optional
  ACL: 'public-read',                                 // this is the default - set to `public-read` to let anyone view uploads
}));

 
 //email
 app.post("/api/contact", sendEmail);

 


// masterRoutes(app);

app.get("/api/tools", controllers.getAlltool);
app.post("/api/tools",controllers.createtool);
app.delete("/api/tools/:id",controllers.deltool);
app.put('/api/tool-edit/:id', controllers.updatetool);

app.get("/api/renter", controllers.getallrenter);
app.post("/api/renter",controllers.createrenter);
app.delete("/api/renter/:id",controllers.delrenter);
app.put('/api/renter-edit/:id', controllers.updaterenter);

app.get("/api/marketlisting", controllers.getallmarketlisting);
app.post("/api/marketlisting",controllers.createmarketlisting);
app.delete("/api/marketlisting/:id",controllers.delmarketlisting);
app.put('/api/marketlisting/:id', controllers.updatemarketlisting);

app.get("/api/favorites", controllers.getallfavorites);
app.post("/api/favorites",controllers.createfavorites);
app.delete("/api/favorites/:id",controllers.delfavorites);

app.get("/api/reviews", controllers.getallreviews);
app.post("/api/reviews",controllers.createreviews);
app.delete("/api/reviews/:id",controllers.delreviews);
app.put('/api/reviews-edit/:id', controllers.updatereviews);

app.get("/api/pending/", controllers.getallpending);
app.post("/api/pending",controllers.createpending);
app.delete("/api/pending/:id",controllers.delpending);
// app.get("/api/pending/", controllers.getpending);

// app.get("/api/category", controllers.getcategory);
app.post("/api/approved",controllers.createapproved);
app.get("/api/approved/", controllers.getallapproved);


//stripe
app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "Pay for the tool rental",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

app.listen(port, () => console.log(`Listening on port: ${port}`));