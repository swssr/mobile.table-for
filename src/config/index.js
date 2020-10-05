const IS_LIVE = process.env.NODE_ENV !== "development";

module.exports = {
  IS_LIVE,
  // API_URL: IS_LIVE
  // 	? "https://tablefor.ew.r.appspot.com"
  // 	: "http://localhost:8080",
  API_URL: "https://tablefor.ew.r.appspot.com",
  // : "http://localhost:8080",
};
