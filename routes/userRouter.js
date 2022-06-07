const userCtrl = require('../controllers/userCtrl')
const router = require('express').Router()
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register)
router.post('/activate', userCtrl.activateEmail)
router.post('/login', userCtrl.login)
router.get('/refreshtoken', userCtrl.getAccessToken)
router.post('/forgot', userCtrl.forgotPassword)
router.post('/reset', auth, userCtrl.resetPassword)
router.get('/logout', userCtrl.logout)
router.post('/google_login', userCtrl.googleLogin)
router.post('/facebook_login', userCtrl.facebookLogin)

module.exports = router