
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ProjManag/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/ProjManag"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 801, hash: '9d03110335dd75a9187be684262b2c4e41d5f76c319692bdfbfdc12cd4c1e324', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1135, hash: '7f023686827e6cd93f6db7f79f62f3aa22f5e2fd6b9317ef0fdb54c394e0d72f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4O5FHHO7.css': {size: 665, hash: 'urp81LWLxnM', text: () => import('./assets-chunks/styles-4O5FHHO7_css.mjs').then(m => m.default)}
  },
};
