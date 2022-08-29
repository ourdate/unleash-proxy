const port = 3000;

const { createApp } = require('@unleash/proxy');

const app = createApp({
    unleashUrl: process.env.UNLEASH_API_URL,
    unleashApiToken: process.env.CLIENT_API_TOKEN,
    clientKeys: [process.env.PROXY_CLIENT_KEY],
    proxyPort: 3000,
});

app.listen(port, () =>
    console.log(`Unleash Proxy listening on http://0.0.0.0:${port}/proxy`),
);
