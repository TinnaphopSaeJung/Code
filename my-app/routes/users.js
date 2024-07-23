var express = require('express');
var router = express.Router();
var userModel = require('../models/user')
// const multer = require('multer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post('/register', async (req, res) => {
  try {
    let body = req.body

    const { username, password } = req.body
    let checkUser = await userModel.findOne({ username })

    if (checkUser) {
      return res.send('User Already Exists').status(400)
    }

    let newUser = new userModel({
      username: body.username,
      password: body.password,
      fname: body.fname,
      lname: body.lname,
      age: body.age
    })

    newUser.password = await bcrypt.hash(password, 10)

    let user = await newUser.save()

    return res.status(201).send({
      data: user,
      message: "Register Success!!!"
  })

  } catch (err) {
    return res.status(err.status || 500)
    .send(err.message)
  }

  // let password = req.body.password

  // let hash_password = await bcrypt.hash(password, 10)

  // let check = await bcrypt.compare(password, hash_password)

  // res.send({
  //   hash_password,
  //   check
  // })
})


router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    let user = await userModel.findOne({ username })

    if (!user.approve) {
      return res.status(400).send('This account has not been approved yet.')
    }

    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password)

      if (!checkPassword) {
        return res.status(400).send('Invalid login, please try again') 
      }

      let payload = {
        username: user.username,
        password: user.password,
        role: user.role
      }

      let createToken = jwt.sign(payload, process.env.TOKEN_KEY , { expiresIn: "1d" })

      return res.status(201).send({
        message: `Hello ${username}, You logged in Successfully.`,
        token: createToken
    })
    } else {                            // กรณีไม่มี user
      return res.status(400).send({
        message: 'Invalid login, please try again'
      })
    }
  } catch (err) {
    return res.status(err.status || 500)
    .send(err.message)
  }



  // let payload = {
  //   name: "jung",
  //   age: 23,
  //   role: "admin"
  // }

  // let token = jwt.sign(payload, process.env.TOKEN_KEY)  // ตั้งเป็น string อะไรก็ได้

  // res.send({
  //   token
  // })
})

const detoken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw { message: "require token" }
    }

    let token = req.headers.authorization.replace('Bearer ', '')
    let data = jwt.verify(token, process.env.TOKEN_KEY)
    req.token = data
    next()

  } catch (err) {
    res.status(401).send({ message: err.message })
  }
}

router.get('/hello', detoken, (req, res) => {
  res.send({ 
    message: `hello ${req.token.role} ${req.token.name}` 
  })
})


// Set up Multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./public")
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   }
// })

// const upload = multer({ storage: storage })


// router.post('/upload', upload.fields([{ name: "file" }, { name: "img" }]), (req, res) => {
//   res.send({ message: "upload success" })
// })

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
