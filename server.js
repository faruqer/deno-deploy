import express from "npm:express@4.18.2";


const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

app.get("/test", (req, res) => {
  res.render("index");
});

app.post("/test", (req, res)=>{
  const {name} = req.body
  res.redirect(`/about?name=${name}`)
})

app.get("/about", (req, res)=>{
  res.send(`Hey ${req.query.name}`)
})
app.listen(4004, ()=>{
  console.log("Server runnig on port....")
});