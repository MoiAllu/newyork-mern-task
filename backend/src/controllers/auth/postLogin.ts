import { RequestHandler } from 'express';
import User from '../../models/User';
import { comparePassword } from '../../helpers/hashing';
import { generateToken } from '../../helpers/jwt';
/**
 * Echo endpoint
 */
const postLogin: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Missing email or password' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    const token = generateToken(user._id.toString(), user.email);

    const userObject = user.toObject();
    delete userObject.password;

    return res.status(200).json({
      message: 'Login successful',
      user: userObject,
      token,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export default postLogin;
