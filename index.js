var Filter = require('broccoli-persistent-filter');
var compile = require('svelte').compile;

function Svelte(inputNode, options) {
  options = options || {};
  Filter.call(this, inputNode, {
    annotation: options.annotation
  });
  this.svelteOptions = options.svelteOptions || {};
}
Svelte.prototype = Object.create(Filter.prototype);
Svelte.prototype.constructor = Svelte;

Svelte.prototype.extensions = ['html'];
Svelte.prototype.targetExtension = 'html';

Svelte.prototype.processString = function(content, relativePath) {
  return compile(content, this.svelteOptions).code;
};

module.exports = Svelte;
