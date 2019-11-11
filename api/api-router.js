const router = require('express').Router();
const bcrypt = require('bcryptjs')

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  const { password } = req.body
  bcrypt.genSalt(12, function (err, salt) {
    bcrypt.hash(`${passord}`, salt, function (err, hash) {
      return {
        passord: `${password}`,
        hashed: `${hash}`
      }
    })
  })
})

module.exports = router;
