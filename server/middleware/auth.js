import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    console.log(req?.headers?.authorization);

    const token = req.headers?.authorization?.split(" ")[1] || "";
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Server token: ", decodedData);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      console.log("OAuth token: ", decodedData);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
    if (error instanceof jwt.TokenExpiredError) {
      res.status(405).json({ message: "JWT token expired" });
    }
  }
};

export default auth;
