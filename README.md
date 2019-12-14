# NoteTaker

Instructions

1. Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

The application frontend has already been created, it's your job to build the backend and connect the two.

2. The following HTML routes should be created:

- GET /notes - Should return the notes.html file.
- GET \* - Should return the index.html file

3. The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

4. The following API routes should be created:

- GET /api/notes - Should read the db.json file and return all saved notes as JSON.
- POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
-

DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

Description: This application allows user to add and delete notes.

Installation: You will need Node.js, along with the following Node packages: fs-extra, path, and express. It is deployed using Heroku.

Usage: This is for anyone who needs to write and delete notes.

Credits:

getbootstrap.com
Node
Path
Express
FS-extra
Heroku

License: n/a

Badges: n/a

Contributing: n/a

Tests: No TDD was used on this application.
