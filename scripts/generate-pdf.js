const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto("http://localhost:8080/"); // prod, xeniatay.com:8080
	await page.emulateMedia("print");
	await page.pdf({
		path: "build/xenia-tay-resume.pdf", // path (relative to CWD) to save the PDF to.
		printBackground: false, // print background colors
		width: "8.5in",
		height: "11in"
	});
	await browser.close();
})();
