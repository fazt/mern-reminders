import { connectDB } from "./database.js";
import { port } from "./config.js";
import app from "./app.js";

connectDB();

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
