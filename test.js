import assert from 'node:assert/strict'
import test from 'node:test'
import {interactive} from './index.js'

test('interactive', () => {
  // @ts-expect-error runtime.
  assert.equal(interactive(), false, 'should return `false` without node')
  // @ts-expect-error runtime.
  assert.equal(interactive(null), false, 'should return `false` with `null`')

  assert.equal(
    interactive({type: 'text', value: 'alpha'}),
    false,
    'should return `false` without `element`'
  )

  assert.equal(
    // @ts-expect-error: partial.
    interactive({type: 'element'}),
    false,
    'should return `false` without `tagName`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'x',
      properties: {tabIndex: -1},
      children: []
    }),
    true,
    'should return `true` for elements with `tabIndex`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'button',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `button`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'details',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `details`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'embed',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `embed`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'iframe',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `iframe`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'keygen',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `keygen`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'label',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `label`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'select',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `select`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'textarea',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `textarea`'
  )

  assert.equal(
    interactive({type: 'element', tagName: 'a', properties: {}, children: []}),
    false,
    'should return `false` for `a`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'a',
      properties: {href: '#alpha'},
      children: []
    }),
    true,
    'should return `true` for `a` with `href`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'audio',
      properties: {},
      children: []
    }),
    false,
    'should return `false` for `audio`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'audio',
      properties: {controls: true},
      children: []
    }),
    true,
    'should return `true` for `audio` with `controls`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'video',
      properties: {},
      children: []
    }),
    false,
    'should return `false` for `video`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'video',
      properties: {controls: true},
      children: []
    }),
    true,
    'should return `true` for `video` with `controls`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'img',
      properties: {},
      children: []
    }),
    false,
    'should return `false` for `img`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'img',
      properties: {useMap: '#bravo'},
      children: []
    }),
    true,
    'should return `true` for `img` with `useMap`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'object',
      properties: {},
      children: []
    }),
    false,
    'should return `false` for `object`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'object',
      properties: {useMap: '#bravo'},
      children: []
    }),
    true,
    'should return `true` for `object` with `useMap`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'input',
      children: []
    }),
    true,
    'should return `true` for `input`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'input',
      properties: {type: 'hidden'},
      children: []
    }),
    false,
    'should return `false` for `input` with `type` set to `hidden`'
  )

  assert.equal(
    interactive({
      type: 'element',
      tagName: 'input',
      properties: {type: 'reset'},
      children: []
    }),
    true,
    'should return `true` for `input` with `type` set to `reset`'
  )
})
