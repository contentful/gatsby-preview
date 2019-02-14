# gatsby-preview

Based on https://github.com/contentful-userland/gatsby-contentful-starter

Customized to build from preview and delivery api, controlled via env vars so it can be used with `Gatsby Preview` and deployed to Netlify.

To pre-fill a space with the needed content, use:

```bash
npm run setup
```

For local development, run:

```bash
CTF_SPACE={YourID} CTF_HOST={preview.contentful.com | cdn.contentful.com CTF_TOKEN={deliveryToken | previewToken} npm run dev
```
