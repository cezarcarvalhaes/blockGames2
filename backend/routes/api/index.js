const router = require("express").Router();
const gameRoutes = require("./games");
// const path = require("path");
// // const router = require("express").Router();
// const apiRoutes = require("./routes");
// // import path from "path";

// // import apiRoutes from "./routes";

// // API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../../public/index.html"));
// });

// module.exports = router;

// Book routes
router.use("/games", gameRoutes);

module.exports = router;
