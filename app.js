const path = require("path");
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(express.static(path.join(__dirname, 'public')));
const momgoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// });
momgoose.connect('mongodb+srv://preranaramteke4515:WT43OGdF61TUezze@cluster0.thvb45u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(
  app.listen(4000, () => {
    console.log("ur app is running on some port no {4000})");
  })
).catch(err=>{
  console.log(err);
});
//npm install mongoose
