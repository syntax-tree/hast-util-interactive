# hast-util-interactive [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check whether a [HAST node][hast] is [**interactive**][spec].

## Installation

[npm][]:

```bash
npm install hast-util-interactive
```

**hast-util-interactive** is also available as an AMD, CommonJS, and
globals module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var interactive = require('hast-util-interactive');
```

Checks:

```javascript
var a = interactive({
    'type': 'element',
    'tagName': 'a',
    'properties': {},
    'children': []
});
var b = interactive({
    'type': 'element',
    'tagName': 'a',
    'properties': {
        'href': '#alpha'
    },
    'children': []
});
var c = interactive({
    'type': 'element',
    'tagName': 'video',
    'properties': {
        'controls': true
    },
    'children': []
});
```

Yields:

```txt
a: false
b: true
c: true
```

## API

### `interactive(node)`

**Parameters**:

*   `node` ([`Node`][node], optional) — Node to check.

**Returns**:

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

[releases]: https://github.com/wooorm/hast-util-interactive/releases

[license]: LICENSE

[author]: http://wooorm.com

[hast]: https://github.com/wooorm/hast

[node]: https://github.com/wooorm/hast#node

[element]: https://github.com/wooorm/hast#element

[spec]: https://html.spec.whatwg.org/#interactive-content
