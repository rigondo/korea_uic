export const home = (req, res) => {
	res.render("home", { pageTitle: "Home", siteName: "UIC" });
};

export const intro = (req, res) => {
	res.render("introduce", { pageTitle: "Intro", siteName: "UIC" });
};

export const members = (req, res) => {
	res.render("members", { pageTitle: "Members", siteName: "UIC" });
};

export const activity = (req, res) => {
	res.render("activity", { pageTitle: "Activity", siteName: "UIC" });
};

export const hww = (req, res) => {
	res.render("hww", { pageTitle: "How We Works", siteName: "UIC" });
};

export const sponsor = (req, res) => {
	res.render("sponsor", { pageTitle: "Sponsor", siteName: "UIC" });
};
