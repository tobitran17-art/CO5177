module.exports = function mdLoader(source) {
  return `module.exports = ${JSON.stringify(source)};`;
};
