import express from 'express';

const port = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'success' }).status(200);
});

app.listen(port, () => console.log('Server running on ', port));
