# gatsby-preview

Based on https://github.com/contentful-userland/gatsby-contentful-starter

Customized to build from preview and delivery api, controlled via env vars so it can be used with `Gatsby Preview` and deployed to Netlify.

To pre-fill a space with the needed content, use:

```bash
npm run setup
```

For local development, run:

```bash
GATSBY_CONTENTFUL_SPACE_ID={spaceID} \
GATSBY_CONTENTFUL_HOST={preview.contentful.com|cdn.contentful.com} \
GATSBY_CONTENTFUL_ACCESS_TOKEN={deliveryToken|previewToken} \
npm run dev
```

For deployment, run:

```bash
GATSBY_CONTENTFUL_SPACE_ID={spaceID} \
GATSBY_CONTENTFUL_HOST={preview.contentful.com|cdn.contentful.com} \
GATSBY_CONTENTFUL_ACCESS_TOKEN={deliveryToken|previewToken} \
npm run build
```
