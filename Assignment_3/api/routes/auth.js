const express = require("express");
const jwt = require("jsonwebtoken");
const users = require("../data/users");

const router = express.Router();
const SECRET = process.env.JWT_SECRET || "CHANGE_ME_BEFORE_SUBMISSION";


const authenticateToken   = (req, res, next) =>{

const authHeader = req.headers ['authorization'];
const token = authHeader && authHeader.split(' ')[1];

if (!token) return res.sendstatus(401);

jwt.verify(token, process.env.JWT_SECRET_KEY, (err,decoded) => {
  if (err) return res.sendStatus(403);

  req.user = decoded;

  next();


  });
}


// POST /login
// Body: { username, password }
// On success: return a JWT that includes { userId, role } as claims.
router.post("/login", (req, res, next) => {
  // TODO: implement:
  // - Look up user in users.js


  foreach (account, 0, users)
  {

      if ((account.username =! null) && (account.password =! null)) 
      {


        if(account.username == req.username)
        {
            if(account.password == req.password)
            {
              
                

            }

        }


      }

  }
  // - Check password (plain text is fine for this assignment)
  // - If invalid, pass an appropriate auth error into next(err)
  // - If valid, sign a JWT and return { token }
  next(new Error("Login endpoint not implemented yet"));
});

module.exports = router;