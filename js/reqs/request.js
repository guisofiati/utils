import express from "express";
import axios from "axios";

const app = express();

app.listen(3001);

// json server

// to execute:
// npm install -g json-server
// json-server --watch db.json
// npm i
// node .

axios
  .get("http://localhost:3000/posts")
  .then((response) => console.log(response.data));

axios.post("http://localhost:3000/posts", {
  id: 2,
  title: "teste",
  author: "none",
});

axios
  .get("http://localhost:3000/posts")
  .then((response) => console.log(response.data));

axios.put("http://localhost:3000/posts/1", {
  title: "teste 2",
  author: "none",
});

axios.delete("http://localhost:3000/posts/2");

axios
  .get("http://localhost:3000/posts")
  .then((response) => console.log(response.data));
