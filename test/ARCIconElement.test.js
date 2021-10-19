import { fixture, html, assert } from '@open-wc/testing';
import '../arc-icon.js';
import { add } from '../index.js';

describe('ARCIconElement', () => {
  describe('rendering an icon via property', () => {
    async function basicFixture(name) {
      return fixture(html`<arc-icon icon="${name}"></arc-icon>`);
    }

    it('adds the icon to the shadow DOM', async () => {
      const element = await basicFixture('add');
      const node = element.shadowRoot.querySelector('svg');
      assert.ok(node);
    });

    it('does not render slot when the attribute is set', async () => {
      const element = await basicFixture('add');
      const node = element.shadowRoot.querySelector('slot');
      assert.notOk(node);
    });

    it('renders slot when the attribute is not set', async () => {
      const element = await basicFixture();
      const node = element.shadowRoot.querySelector('slot');
      assert.ok(node);
    });

    it('has set value on the icon property', async () => {
      const element = await basicFixture('add');
      assert.equal(element.icon, 'add');
    });

    it('ignores update when setting up the same property', async () => {
      const element = await basicFixture('add');
      let called = false;
      element._updateIcon = () => {
        called = true;
      };
      element.icon = 'add';
      assert.isFalse(called);
    });
  });

  // open-wc's html is not compatible with lit-html's html.
  describe.skip('rendering as a child', () => {
    async function basicFixture(tpl) {
      return fixture(html`<arc-icon>${tpl}</arc-icon>`);
    }

    it('has the icon in the slot', async () => {
      const element = await basicFixture(add);
      const slot = element.shadowRoot.querySelector('slot');
      const nodes = slot.assignedElements();
      assert.lengthOf(nodes, 1);
    });

    it('has parents size', async () => {
      const element = await basicFixture(add);
      const slot = element.shadowRoot.querySelector('slot');
      const svg = slot.assignedElements()[0];
      const rect = svg.getBoundingClientRect();
      assert.equal(rect.width, 24, 'has weight');
      assert.equal(rect.height, 24, 'has height');
    });
  });
});
