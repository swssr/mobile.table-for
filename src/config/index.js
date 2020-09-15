const IS_LIVE = !process.env.NODE_ENV === "development";

module.exports = {
	IS_LIVE,
	API_URL: IS_LIVE
		? "http://localhost:8080"
		: "https://tablefor.ew.r.appspot.com",
};
