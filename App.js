import express from "express";
import { getNotes, createNote, getId } from "./database.js";

const app = express();
const port = 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("All NotesApp");
});

app.get("/notes", async (req, res) => {
  const notes = await getNotes();
  res.send(notes);
});

app.get("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const note = await getId(id);
  res.send(note);
});

app.post("/notes", async (req, res) => {
  const { title, contents } = req.body;
  const newNote = await createNote(title, contents);
  res.send(newNote);
});

app.use((err, req, res, end) => {
  console.error(err.stack);
  res.status(500).send("Trouble in your app");
});

app.listen(port, () => {
  console.log(`Server Running in http://localhost:${port}`);
});
