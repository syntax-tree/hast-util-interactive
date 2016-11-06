'use strict';

/* Dependencies. */
var test = require('tape');
var interactive = require('./');

/* Tests. */
test('interactive', function (t) {
  t.equal(interactive(), false, 'should return `false` without node');
  t.equal(interactive(null), false, 'should return `false` with `null`');

  t.equal(
    interactive({type: 'text', value: 'alpha'}),
    false,
    'should return `false` without `element`'
  );

  t.equal(
    interactive({type: 'element'}),
    false,
    'should return `false` without `tagName`'
  );

  t.equal(
    interactive({
      type: 'element',
      properties: {tabIndex: -1}
    }),
    true,
    'should return `true` for elements with `tabIndex`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'button'}),
    true,
    'should return `true` for `button`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'details'}),
    true,
    'should return `true` for `details`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'embed'}),
    true,
    'should return `true` for `embed`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'iframe'}),
    true,
    'should return `true` for `iframe`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'keygen'}),
    true,
    'should return `true` for `keygen`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'label'}),
    true,
    'should return `true` for `label`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'select'}),
    true,
    'should return `true` for `select`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'textarea'}),
    true,
    'should return `true` for `textarea`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'a'}),
    false,
    'should return `false` for `a`'
  );

  t.equal(
    interactive({
      type: 'element',
      tagName: 'a',
      properties: {href: '#alpha'}
    }),
    true,
    'should return `true` for `a` with `href`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'audio'}),
    false,
    'should return `false` for `audio`'
  );

  t.equal(
    interactive({
      type: 'element',
      tagName: 'audio',
      properties: {controls: true}
    }),
    true,
    'should return `true` for `audio` with `controls`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'video'}),
    false,
    'should return `false` for `video`'
  );

  t.equal(
    interactive({
      type: 'element',
      tagName: 'video',
      properties: {controls: true}
    }),
    true,
    'should return `true` for `video` with `controls`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'img'}),
    false,
    'should return `false` for `img`'
  );

  t.equal(
    interactive({
      type: 'element',
      tagName: 'img',
      properties: {useMap: '#bravo'}
    }),
    true,
    'should return `true` for `img` with `useMap`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'object'}),
    false,
    'should return `false` for `object`'
  );

  t.equal(
    interactive({
      type: 'element',
      tagName: 'object',
      properties: {useMap: '#bravo'}
    }),
    true,
    'should return `true` for `object` with `useMap`'
  );

  t.equal(
    interactive({type: 'element', tagName: 'input'}),
    true,
    'should return `true` for `input`'
  );

  t.equal(
    interactive({
      type: 'element',
      tagName: 'input',
      properties: {type: 'hidden'}
    }),
    false,
    'should return `false` for `input` with `type` set to `hidden`'
  );

  t.equal(
    interactive({
      type: 'element',
      tagName: 'input',
      properties: {type: 'reset'}
    }),
    true,
    'should return `true` for `input` with `type` set to `reset`'
  );

  t.end();
});
