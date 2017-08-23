let history = require('connect-history-api-fallback')
let his = history({
  disableDotRule: true,
  verbose: true,
  rewrites: [
    {
      from: /.*static.*/,
      to: function (context) {
        let path = context.parsedUrl.pathname;
        let n = path.indexOf('/static/');
        return path.substring(n);
      }
    },
    {
      from: /.*api.*/,
      to: function (context) {
        return context.parsedUrl.pathname;
      }
    }
  ]
})

module.exports = his;
