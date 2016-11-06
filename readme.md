# hast-util-interactive [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check whether a [HAST node][hast] is [**interactive**][spec].

## Installation

[npm][]:

```bash
npm install hast-util-interactive
```

## Usage

```javascript
var interactive = require('hast-util-interactive');

interactive({
  type: 'element',
  tagName: 'a',
  properties: {},
  children: []
}); //=> false

interactive({
  type: 'element',
  tagName: 'a',
  properties: {href: '#alpha'},
  children: []
}); //=> true

interactive({
  type: 'element',
  tagName: 'video',
  properties: {controls: true},
  children: []
}); //=> true
```

## API

### `interactive(node)`

###### Parameters

*   `node` ([`Node`][node], optional) — Node to check.

###### Returns

`boolean` — Whether `node` is an [`Element`][element] categorised
as [**interactive**][spec].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/hast-util-interactive.svg

[build-page]: https://travis-ci.org/wooorm/hast-util-interactive

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/hast-util-interactive.svg

[coverage-page]: https://codecov.io/github/wooorm/hast-util-interactive?branch=master

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[hast]: https://github.com/wooorm/hast

[node]: https://github.com/wooorm/hast#node

[element]: https://github.com/wooorm/hast#element

[spec]: https://html.spec.whatwg.org/#interactive-content
