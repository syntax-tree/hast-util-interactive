/**
 * @typedef {import('unist').Node} Node
 */

import {hasProperty} from 'hast-util-has-property'

// Always interactive nodes.
var alwaysInteractive = new Set([
  'button',
  'details',
  'embed',
  'iframe',
  'keygen',
  'label',
  'select',
  'textarea'
])

/**
 * @param {Node} node
 * @returns {boolean}
 */
export function interactive(node) {
  /** @type {string} */
  var name

  if (!node || typeof node !== 'object' || node.type !== 'element') {
    return false
  }

  // @ts-ignore looks like an element.
  name = node.tagName

  return (
    (name === 'a' && hasProperty(node, 'href')) ||
    (name === 'audio' && hasProperty(node, 'controls')) ||
    (name === 'video' && hasProperty(node, 'controls')) ||
    (name === 'object' && hasProperty(node, 'useMap')) ||
    (name === 'img' && hasProperty(node, 'useMap')) ||
    // @ts-ignore looks like an element.
    (name === 'input' && (node.properties || {}).type !== 'hidden') ||
    hasProperty(node, 'tabIndex') ||
    alwaysInteractive.has(name)
  )
}
