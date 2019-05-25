'use strict'

var has = require('hast-util-has-property')

module.exports = interactive

// Always interactive nodes.
var alwaysInteractive = [
  'button',
  'details',
  'embed',
  'iframe',
  'keygen',
  'label',
  'select',
  'textarea'
]

function interactive(node) {
  var name

  if (!node || typeof node !== 'object' || node.type !== 'element') {
    return false
  }

  name = node.tagName

  return (
    (name === 'a' && has(node, 'href')) ||
    (name === 'audio' && has(node, 'controls')) ||
    (name === 'video' && has(node, 'controls')) ||
    (name === 'object' && has(node, 'useMap')) ||
    (name === 'img' && has(node, 'useMap')) ||
    (name === 'input' && (node.properties || {}).type !== 'hidden') ||
    has(node, 'tabIndex') ||
    alwaysInteractive.indexOf(name) !== -1
  )
}
