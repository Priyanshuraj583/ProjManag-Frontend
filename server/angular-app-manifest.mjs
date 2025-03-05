
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ProjManag-Frontend/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/ProjManag-Frontend"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 810, hash: 'e11cd24cbb0956e8fd424fdce9d3c02cf6a355345c7cc2ac093c4a28d103cd38', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1144, hash: 'c719130c43226f2ab3338d55be7611311995e7fbf7e629bb5b466449a184c67d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4O5FHHO7.css': {size: 665, hash: 'urp81LWLxnM', text: () => import('./assets-chunks/styles-4O5FHHO7_css.mjs').then(m => m.default)}
  },
};
