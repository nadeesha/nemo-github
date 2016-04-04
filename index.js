exports.handler = function(event, context) {
  require('./lib/index.js').default(event, function (err, result) {
    if (err) {
      return context.fail(err);
    }

    return context.succeed(result)
  });
}