import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // The CV carries a phone number. Keep it linkable, keep it out of
            // search results and off the crawlers that harvest contact details.
            disallow: '/cv.pdf',
        },
        sitemap: 'https://alaminsuzuki.com/sitemap.xml',
    };
}
