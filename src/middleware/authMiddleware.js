import pkg from 'jsonwebtoken';
import { info, error } from "../utils/logger.js";
const { verify } = pkg;


export default function authenticateToken(req, res, next) {
  try {
    const SECRET =  process.env.JWT_SECRET || 'urvashiSecretKey';
    const authHeader = req.headers["authorization"];

    const token = authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);
    verify(token, SECRET, (err, user) => {
      if (err){
       return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } catch (err) {
    error(`Login failed: ${err}`);
  }

};
