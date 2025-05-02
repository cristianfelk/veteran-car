const loginService = require('../services/loginService');

const postLogin = async (req, res, next) => {
  try {
      const params = req.body; 
      const result = await loginService.postLogin(params);
      
      if (result.success) {
          res.status(200).send(result); 
      } else {
          res.status(401).send(result);
      }
  } catch (err) {
      next(err);
  } 
};

module.exports = {
    postLogin
};