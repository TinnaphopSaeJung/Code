const jwt = require('jsonwebtoken');

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

const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.token.role)) {
      return res.status(403).send({ message: 'Access denied' });
    }
    next();
  }
}

module.exports = {
  detoken,
  checkRole
};
