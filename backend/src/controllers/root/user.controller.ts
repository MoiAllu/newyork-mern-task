import User from "../../mongodb/models/user";
import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync();

  const loginUser = async (req:any, res:any) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          res.status(200).json(user);
          res.setHeader("Access-Control-Allow-Origin", "*");
        } else {
          res.status(400).json({ message: "Wrong password" });
        }
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error :any) {
      res.status(500).json({ message: error.message });
    }
  };

  const signupUser = async (req:any, res:any) => {
    const { name, email, password } = req.body;
    try {
      const userExists = await User.findOne({ email });
      if (userExists)
        return res.status(401).json({ message: "User already exists" });
      const newUser = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, salt),
      });
      res.status(200).json(newUser);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  export {loginUser, signupUser };