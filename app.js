const express = require('express');
const path = require('path');
const pageRoutes = require('./routes/pages');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/', pageRoutes);

app.listen(PORT, () => {
  console.log(`Children Bank is running on port ${PORT}`);
});
