const db  = require('../models')
const jwt = require('jsonwebtoken')

exports.verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[0];

    const { sub : userId } = jwt.verify(token, process.env.SECRET_KEY);

    let user = await db.User.findOne({ _id : userId })
    if(!user) throw 'You are not verified to view this content'

    req.user = user
    next()

  } catch (error) {
    console.error('Verification error: ', error);
    res.status(401).send({ message: 'Admin verification failed!' });
  }
}