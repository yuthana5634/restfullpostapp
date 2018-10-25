var bodyParser = require("body-parser"),
mongoose       = require("mongoose"),
express        = require('express'),
app            = express();

mongoose.connect("mongodb://localhost:27017/aa");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

Blog.create({
    title: "Test Blog",
    image: "https://d2nzqyyfd6k6c7.cloudfront.net/styles/nova_evo_landscape/s3/article/thumbnail/golden_retriever_puppy.jpg?itok=DrgEYcXg",
    body: "HELLO THIS IS A BLOG POST!"
});

// RESTFUL ROUTES

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!");

});