import express from "express";

const app = express();
app.use(express.json());
const PORT = 8080;

const courses = [
  { id: 1, name: 'JavaScript Grundkurs' },
  { id: 2, name: 'Backend med Express' }
];

app.get('/', (req, res) => {
  res.send('Välkommen till servern!');
});

// excersice 1
app.get('/api/name', (req, res) => {
  res.json({ name: 'Thomas'});
});

// exercise 2
app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hej ${name}!`})
})

// exercise 3
app.get('/api/courses', (req, res) => {
  res.json({courses})
})

// Exercise 4
app.post('/api/add', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({error : 'Både titel och description krävs!'});
  }

  const newCourse = {
    id: courses.length + 1,
    name: title,
    description: description
  };

  courses.push(newCourse);
  res.json(courses);
})

app.listen(PORT, () => {
  console.info(`Servern körs på http://localhost:${PORT}`);
});