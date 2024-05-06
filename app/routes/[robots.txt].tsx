export const loader = () => {
  const robotText = `
    User-Agent: *
    Allow: /
    Disallow: /private/

    Sitemap: https://eb.by/sitemap.xml
    `;
  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
