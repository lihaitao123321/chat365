const userService = require('../service/userService');module.exports = (req, res, next) => {  // res.json({code:0,msg:'登陆ok!'});  let userInfo = req.query || req.body;  userService.setUserInfo(userInfo, (status, newInfo) => {  })}