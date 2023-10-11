import { RequestHandler } from 'express';
import User from '../../models/User';
import { hashPassword } from '../../helpers/hashing';
import { generateToken } from '../../helpers/jwt';
/**
 * Echo endpoint
 */
const postRegister: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Missing email or password' });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const passwordHashed = await hashPassword(password);

    const newUser = new User({
      email,
      password: passwordHashed,
    });

    await newUser.save();

    const token = generateToken(user._id.toString(), user.email);

    const userObject = newUser.toObject();
    delete userObject.password;

    return res.status(201).json({
      message: 'Register successful',
      user: userObject,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default postRegister;
