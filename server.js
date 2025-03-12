const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());//จัดการการใช้งานข้ามโดเมน
app.use(express.json());//จัดรูปแบบข้อมูลในการทรับส่งที่เป็น json

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log("Server is running on port" +PORT + "....");
});

