// Anything written to the util variable will be included in module.exports
var util = module.exports

util.serve = function(z) {
  res.sendFile("/app/views/" + z)
}