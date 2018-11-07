# hast-util-interactive [![Build][build-badge]][build] [![Coverage][coverage-badge]][coverage] [![Downloads][downloads-badge]][downloads] [![Chat][chat-badge]][chat]

Check whether a [HAST node][hast] is [**interactive**][spec].

## Installation

[npm][]:

```bash
npm install hast-util-interactive
```

## Usage

```javascript
var interactive = require('hast-util-interactive')

interactive({
  type: 'element',
  tagName: 'a',
  properties: {},
  children: []
}) // => false

interactive({
  type: 'element',
  tagName: 'a',
  properties: {href: '#alpha'},
  children: []
}) // => true

interactive({
  type: 'element',
  tagName: 'video',
  properties: {controls: true},
  children: []
}) // => true
```

## API

### `interactive(node)`

###### Parameters

*   `node` ([`Node`][node], optional) — Node to check.

###### Returns

`boolean` — Whether `node` is an [`Element`][element] categorised
as [**interactive**][spec].

## Contribute

See [`contributing.md` in `syntax-tree/hast`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-interactive.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-interactive

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-interactive.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-interactive

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-interactive.svg

[downloads]: https://www.npmjs.com/package/hast-util-interactive

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/rehype

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[hast]: https://github.com/syntax-tree/hast

[node]: https://github.com/syntax-tree/unist#node

[element]: https://github.com/syntax-tree/hast#element

[spec]: https://html.spec.whatwg.org/#interactive-content

[contributing]: https://github.com/syntax-tree/hast/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/hast/blob/master/code-of-conduct.md
