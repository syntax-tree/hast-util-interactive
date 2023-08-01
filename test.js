import assert from 'node:assert/strict'
import test from 'node:test'
import {interactive} from './index.js'

test('interactive', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), [
      'interactive'
    ])
  })

  await t.test('should return `false` without `element`', async function () {
    assert.equal(interactive({type: 'text', value: 'alpha'}), false)
  })

  await t.test(
    'should return `true` for elements with `tabIndex`',
    async function () {
      assert.equal(
        interactive({
          type: 'element',
          tagName: 'x',
          properties: {tabIndex: -1},
          children: []
        }),
        true
      )
    }
  )

  await t.test('should return `true` for `button`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'button',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test('should return `true` for `details`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'details',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test('should return `true` for `embed`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'embed',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test('should return `true` for `iframe`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'iframe',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test('should return `true` for `keygen`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'keygen',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test('should return `true` for `label`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'label',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test('should return `true` for `select`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'select',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test('should return `true` for `textarea`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'textarea',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test('should return `false` for `a`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'a',
        properties: {},
        children: []
      }),
      false
    )
  })

  await t.test('should return `true` for `a` with `href`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'a',
        properties: {href: '#alpha'},
        children: []
      }),
      true
    )
  })

  await t.test('should return `false` for `audio`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'audio',
        properties: {},
        children: []
      }),
      false
    )
  })

  await t.test(
    'should return `true` for `audio` with `controls`',
    async function () {
      assert.equal(
        interactive({
          type: 'element',
          tagName: 'audio',
          properties: {controls: true},
          children: []
        }),
        true
      )
    }
  )

  await t.test('should return `false` for `video`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'video',
        properties: {},
        children: []
      }),
      false
    )
  })

  await t.test(
    'should return `true` for `video` with `controls`',
    async function () {
      assert.equal(
        interactive({
          type: 'element',
          tagName: 'video',
          properties: {controls: true},
          children: []
        }),
        true
      )
    }
  )

  await t.test('should return `false` for `img`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'img',
        properties: {},
        children: []
      }),
      false
    )
  })

  await t.test(
    'should return `true` for `img` with `useMap`',
    async function () {
      assert.equal(
        interactive({
          type: 'element',
          tagName: 'img',
          properties: {useMap: '#bravo'},
          children: []
        }),
        true
      )
    }
  )

  await t.test('should return `false` for `object`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'object',
        properties: {},
        children: []
      }),
      false
    )
  })

  await t.test(
    'should return `true` for `object` with `useMap`',
    async function () {
      assert.equal(
        interactive({
          type: 'element',
          tagName: 'object',
          properties: {useMap: '#bravo'},
          children: []
        }),
        true
      )
    }
  )

  await t.test('should return `true` for `input`', async function () {
    assert.equal(
      interactive({
        type: 'element',
        tagName: 'input',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test(
    'should return `false` for `input` with `type` set to `hidden`',
    async function () {
      assert.equal(
        interactive({
          type: 'element',
          tagName: 'input',
          properties: {type: 'hidden'},
          children: []
        }),
        false
      )
    }
  )

  await t.test(
    'should return `true` for `input` with `type` set to `reset`',
    async function () {
      assert.equal(
        interactive({
          type: 'element',
          tagName: 'input',
          properties: {type: 'reset'},
          children: []
        }),
        true
      )
    }
  )
})
