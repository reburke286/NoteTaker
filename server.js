// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const fs = require("fs-extra");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 7000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", function(req, res) {
  return res.sendFile(path.join(__dirname, "db.json"));
});

app.post("/api/notes", function(req, res) {
  const parsedData = readJSON();
  const newNote = { id: findNextID(parsedData), ...req.body };
  console.log("new note", newNote);
  parsedData.push(newNote);
  fs.writeFileSync("db.json", JSON.stringify(parsedData));
  res.end();
});

const readJSON = () => {
  const data = fs.readFileSync("db.json");
  return JSON.parse(data);
};

const findNextID = data => {
  const lastObject = data[data.length - 1];
  if (!lastObject) {
    return 1;
  }
  return lastObject.id + 1;
};

app.delete("/api/notes/:id", function(req, res) {
  const chosenID = parseInt(req.params.id);
  const parsedData = readJSON();
  let newData = [];
  for (let i = 0; i < parsedData.length; i++) {
    const note = parsedData[i];
    if (chosenID !== note.id) {
      newData.push(note);
    }
  }
  fs.writeFileSync("db.json", JSON.stringify(newData));
  res.end();
});

app.use(express.static(path.join(__dirname, "/assets")));

app.use(express.static(path.join(__dirname, "/assets")));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
