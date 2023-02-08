import express, { response } from "express";
import { handleUser } from "./controller/users";

// create app express
const app = express();

app.get('', (res, response) => {
  response.send('Ket noi thanh cong')
})

app.get('/users', handleUser);

// lắng nghe cổng
app.listen(3333, 'localhost', () => {
  console.log('connect ok')
})