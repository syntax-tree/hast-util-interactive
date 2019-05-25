# hast-util-interactive

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Check whether a [**hast**][hast] node is [*interactive*][spec].

## Install

[npm][]:

```sh
npm install hast-util-interactive
```

## Usage

```js
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

`boolean` — Whether `node` is an [`Element`][element] categorised as
[*interactive*][spec].

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/unist-util-assert.svg

[build]: https://travis-ci.org/syntax-tree/unist-util-assert

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-assert.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-assert

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-assert.svg

[downloads]: https://www.npmjs.com/package/unist-util-assert

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-assert.svg

[size]: https://bundlephobia.com/result?p=unist-util-assert

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[hast]: https://github.com/syntax-tree/hast

[node]: https://github.com/syntax-tree/unist#node

[element]: https://github.com/syntax-tree/hast#element

[spec]: https://html.spec.whatwg.org/#interactive-content
