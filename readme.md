# hast-util-interactive

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to check whether a node is [*interactive*][spec].

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```sh
npm install hast-util-interactive
```

## Use

```js
import {interactive} from 'hast-util-interactive'

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

This package exports the following identifiers: `interactive`.
There is no default export.

### `interactive(node)`

###### Parameters

*   `node` ([`Node`][node], optional) — Node to check.

###### Returns

`boolean` — Whether `node` is an [`Element`][element] categorised as
[*interactive*][spec].

## Security

`hast-util-interactive` does not change the syntax tree so there are no openings
for [cross-site scripting (XSS)][xss] attacks.

## Related

*   [`hast-util-is-element`](https://github.com/syntax-tree/hast-util-is-element)
    — check if a node is a (certain) element
*   [`hast-util-has-property`](https://github.com/syntax-tree/hast-util-has-property)
    — check if a node has a property
*   [`hast-util-is-body-ok-link`](https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-is-body-ok-link)
    — check if a node is “Body OK” link element
*   [`hast-util-is-conditional-comment`](https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-is-conditional-comment)
    — check if a node is a conditional comment
*   [`hast-util-is-css-link`](https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-is-css-link)
    — check if a node is a CSS link element
*   [`hast-util-is-css-style`](https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-is-css-style)
    — check if a node is a CSS style element
*   [`hast-util-embedded`](https://github.com/syntax-tree/hast-util-embedded)
    — check if a node is an embedded element
*   [`hast-util-heading`](https://github.com/syntax-tree/hast-util-heading)
    — check if a node is a heading element
*   [`hast-util-is-javascript`](https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-is-javascript)
    — check if a node is a JavaScript script element
*   [`hast-util-labelable`](https://github.com/syntax-tree/hast-util-labelable)
    — check whether a node is labelable
*   [`hast-util-phrasing`](https://github.com/syntax-tree/hast-util-phrasing)
    — check if a node is phrasing content
*   [`hast-util-script-supporting`](https://github.com/syntax-tree/hast-util-script-supporting)
    — check if a node is a script-supporting element
*   [`hast-util-sectioning`](https://github.com/syntax-tree/hast-util-sectioning)
    — check if a node is a sectioning element
*   [`hast-util-transparent`](https://github.com/syntax-tree/hast-util-transparent)
    — check if a node is a transparent element
*   [`hast-util-whitespace`](https://github.com/syntax-tree/hast-util-whitespace)
    — check if a node is inter-element whitespace

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/syntax-tree/hast-util-interactive/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/hast-util-interactive/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-interactive.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-interactive

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-interactive.svg

[downloads]: https://www.npmjs.com/package/hast-util-interactive

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-util-interactive.svg

[size]: https://bundlephobia.com/result?p=hast-util-interactive

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[hast]: https://github.com/syntax-tree/hast

[node]: https://github.com/syntax-tree/unist#node

[element]: https://github.com/syntax-tree/hast#element

[spec]: https://html.spec.whatwg.org/#interactive-content

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
