const express = require("express");
const cors = require("cors");
const session = require("express-session");

const app = express();
const port = 3001;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
);

app.use(
    session({
      resave: false, // don't save session if unmodified
      saveUninitialized: false, // don't create session until something stored
      secret: "screte",
      cookie: { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: false },
    })
);


/**
 * 
 * Rest of code will come here
 * 
 */
app.post("/test", (req, res)=>{
    return res.json({
        status: 1
    })
})
app.post("/api/login", async (req, res) => {
    const email = req.body.email?req.body.email:"";
    const password = req.body.password?req.body.password:"";
    console.log("email", email);
    console.log("password", password);
    if (email == "ankursingh0313@gmail.com" && password == "Abcd@1234") {
        return res.json({
            status: 1,
            session_id: email,
            msg: "Login Successfull"
        })
    } else return res.json({
        status: 0,
        msg: "Invalid email or password!"
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
  
  