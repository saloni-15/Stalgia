import jwt from "jsonwebtoken";

//if user want to like a post
//firstly, middleware will check if the user's token is valid and then call next()
//next() will be the task user wanted to perform(i.e like post)
const auth = async (req, res, next) => {
  try {
    //console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];

    const isCustomAuth = token.length < 500; //to check if the token is from custom auth or google auth

    let decodedData;

    //for custom auth
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData?.id;
    }
    //for google auth
    else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();

  } catch (err) {
    console.log(err);
  }
};
 
export default auth;