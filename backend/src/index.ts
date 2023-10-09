
import express from 'express'
import connectDB from './mongodb/connect'
import userRouter from './routes/user.routes'

const app = express();
app.use(express.json({ limit: "50mb" }));
app.get("/", (req, res) => {
    res.send({ message: "hello world" });
  });

  app.use("/api/user", userRouter);  
  
const startServer = async () => {
  const port = process.env.PORT || 8080;
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};
startServer();