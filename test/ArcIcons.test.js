import { assert } from '@open-wc/testing';
import { SVGTemplateResult, svg } from 'lit-element';
import * as Icons from '../index.js';

describe('ModelingIcons', () => {
  describe('icons', () => {
    const ignored = ['iconWrapper', 'ARCIconElement'];

    const keys = Object.keys(Icons);

    keys.forEach(key => {
      if (ignored.indexOf(key) !== -1) {
        return;
      }

      it(`Returns template for ${key}`, () => {
        const icon = Icons[key];
        assert.isTrue(
          icon instanceof SVGTemplateResult,
          'has SVGTemplateResult instance'
        );
      });
    });
  });

  describe('iconWrapper()', () => {
    it('has iconWrapper function ', () => {
      assert.typeOf(Icons.iconWrapper, 'function');
    });

    it('returns SVGTemplateResult instance', () => {
      const result = Icons.iconWrapper(svg`<path/>`);
      assert.isTrue(result instanceof SVGTemplateResult);
    });
  });
});
