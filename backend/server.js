const express = require('express');
const cors = require ('cors');
const app = express();
const taskRoutes = require('./routes/taskRoute');

app.use(cors());
app.use(express.json());
app.use('/api', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
