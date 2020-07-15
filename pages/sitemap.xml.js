import React from 'react'

const sitemapXML = () => {

	return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://domain.ltd/</loc>
        <lastmod></lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://domain.ltd/about/</loc>
        <priority>0.80</priority>
      </url>
    </urlset>`;
}

sitemapXML.getInitialProps = async ({ ctx }) => {
	const { res } = ctx
	if (!res) return
	res.setHeader("Content-Type", "text/xml");
	res.write(sitemapXML());
	res.end();
}

export default sitemapXML


