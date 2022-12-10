const app = require("./index");

const port = 3002;

app.listen(process.env.PORT || port, () => {
  console.log(`Server running on port ${port}!`);
});
