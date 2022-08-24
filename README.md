# nextjs-spa-example

Current issues

- rewrites not working as expected. Run `npm run start` to build, export and serve the `out` directory.
  - Then visit root, click a post, url will be like `/post/1`
  - rereshing gives a 404
- Exporting the app creates a `[[...index]].html` file which needs to be renamed to `index.html` using renameExport.mjs. Is there a better way to do this?
