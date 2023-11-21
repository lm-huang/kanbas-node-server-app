/** @format */
const Hello = (app) => {
  app.get("/hello", (req, res) => {
    res.send("Life is good!");
  });
  app.get("/", (req, res) => {
    res.send("Welcome to Full Stack Development!");
  });

  app.get("/a5/todos/create", (req, res) => {
    res.send("sbba ");
  });
};
export default Hello;
