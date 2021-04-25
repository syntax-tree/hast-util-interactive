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

export function interactive(node) {
  var name

  if (!node || typeof node !== 'object' || node.type !== 'element') {
    return false
  }

  name = node.tagName

  return (
    (name === 'a' && hasProperty(node, 'href')) ||
    (name === 'audio' && hasProperty(node, 'controls')) ||
    (name === 'video' && hasProperty(node, 'controls')) ||
    (name === 'object' && hasProperty(node, 'useMap')) ||
    (name === 'img' && hasProperty(node, 'useMap')) ||
    (name === 'input' && (node.properties || {}).type !== 'hidden') ||
    hasProperty(node, 'tabIndex') ||
    alwaysInteractive.has(name)
  )
}
