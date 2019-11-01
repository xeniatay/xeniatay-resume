const puppeteer = require("puppeteer");

(async () => {
    // https://github.com/GoogleChrome/puppeteer/issues/3443
    const browser = await puppeteer.launch({args: ['--no-sandbox']});
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
