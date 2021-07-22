import test from 'tape'
import {interactive} from './index.js'

test('interactive', function (t) {
  // @ts-ignore runtime.
  t.equal(interactive(), false, 'should return `false` without node')
  t.equal(interactive(null), false, 'should return `false` with `null`')

  t.equal(
    interactive({type: 'text', value: 'alpha'}),
    false,
    'should return `false` without `element`'
  )

  t.equal(
    // @ts-expect-error: partial.
    interactive({type: 'element'}),
    false,
    'should return `false` without `tagName`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'x',
      properties: {tabIndex: -1},
      children: []
    }),
    true,
    'should return `true` for elements with `tabIndex`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'button',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `button`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'details',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `details`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'embed',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `embed`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'iframe',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `iframe`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'keygen',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `keygen`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'label',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `label`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'select',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `select`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'textarea',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `textarea`'
  )

  t.equal(
    interactive({type: 'element', tagName: 'a', properties: {}, children: []}),
    false,
    'should return `false` for `a`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'a',
      properties: {href: '#alpha'},
      children: []
    }),
    true,
    'should return `true` for `a` with `href`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'audio',
      properties: {},
      children: []
    }),
    false,
    'should return `false` for `audio`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'audio',
      properties: {controls: true},
      children: []
    }),
    true,
    'should return `true` for `audio` with `controls`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'video',
      properties: {},
      children: []
    }),
    false,
    'should return `false` for `video`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'video',
      properties: {controls: true},
      children: []
    }),
    true,
    'should return `true` for `video` with `controls`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'img',
      properties: {},
      children: []
    }),
    false,
    'should return `false` for `img`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'img',
      properties: {useMap: '#bravo'},
      children: []
    }),
    true,
    'should return `true` for `img` with `useMap`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'object',
      properties: {},
      children: []
    }),
    false,
    'should return `false` for `object`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'object',
      properties: {useMap: '#bravo'},
      children: []
    }),
    true,
    'should return `true` for `object` with `useMap`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'input',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `input`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'input',
      properties: {type: 'hidden'},
      children: []
    }),
    false,
    'should return `false` for `input` with `type` set to `hidden`'
  )

  t.equal(
    interactive({
      type: 'element',
      tagName: 'input',
      properties: {type: 'reset'},
      children: []
    }),
    true,
    'should return `true` for `input` with `type` set to `reset`'
  )

  t.end()
})
