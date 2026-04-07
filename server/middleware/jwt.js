import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();

  } catch (err) {

    if (err.name === "TokenExpiredError") {

      const refreshToken = req.headers["x-refresh-token"];

      if (!refreshToken)
        return res.status(401).json({ error: "Access token expired" });

      try {

        const decodedRefresh = jwt.verify(
          refreshToken,
          process.env.JWT_REFRESH_SECRET
        );

        const newAccessToken = jwt.sign(
          { id: decodedRefresh.id },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        res.setHeader("x-access-token", newAccessToken);

        req.user = decodedRefresh;

        next();

      } catch {
        return res.status(401).json({ error: "Refresh token invalid" });
      }

    } else {
      return res.status(401).json({ error: "Invalid token" });
    }
  }
};