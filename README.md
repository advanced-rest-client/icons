[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/arc-icons.svg)](https://www.npmjs.com/package/@advanced-rest-client/arc-icons)

[![Build Status](https://travis-ci.com/advanced-rest-client/arc-icons.svg)](https://travis-ci.com/advanced-rest-client/arc-icons)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/arc-icons)

# arc-icons

A set of icons for Advanced REST Client.

## Usage

### Installation
```
npm install @advanced-rest-client/arc-icons --save
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@advanced-rest-client/arc-icons/arc-icon.js';
    </script>
  </head>
  <body>
    <arc-icon icon="add"></arc-icon>
  </body>
</html>
```

### In a LitElement

```js
import { LitElement, html, svg } from 'lit-element';
import '@advanced-rest-client/arc-icons/arc-icon.js';
import * as Icons from '@advanced-rest-client/arc-icons';

class SampleElement extends LitElement {
  render() {
    return html`
    <!-- using an icon property -->
    <arc-icon icon="add"></arc-icon>
    <!-- passing an icon template as a child-->
    <arc-icon>${Icons.add}</arc-icon>
    <!-- using own container-->
    <span class="icon">${Icons.add}</span>
    <!-- using custom icon -->
    <arc-icon>${Icons.iconWrapper(svg`...`)}</arc-icon>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Development

```sh
git clone https://github.com/advanced-rest-client/arc-icons
cd arc-icons
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests
```sh
npm test
```
