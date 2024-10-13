import type { Metadata } from "next";

const url = "https://www.ame-x.net";
const icon = "/favicon.webp";
const ogpIcon = "/ogp.webp";
const siteName = "EdamAmex Portfolio";
const description = "I'm Web Developer, and OSS Contributor, but not Designer.";

export const metadata: Metadata = {
	metadataBase: new URL(url),
	title: `${siteName}`,
	description,
	openGraph: {
		title: siteName,
		description,
		url,
		siteName,
		locale: "en_US",
		type: "website",
		images: ogpIcon
	},
	icons: icon,
	verification: {
		google: ""
	},
	publisher: `@EdamAme-x`,
	robots: "index, follow",
	creator: `@EdamAme-x`,
	keywords: ["amex2189", "edamamex", "edamame-x"],
};