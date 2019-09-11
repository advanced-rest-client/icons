import { expect } from '@open-wc/testing';
import '@polymer/iron-meta/iron-meta.js';
import '../arc-icons.js';

describe('<arc-icons>', function() {
  let meta;
  const iconsetNames = [
    'arc'
  ];

  before(function() {
    meta = document.createElement('iron-meta');
    meta.type = 'iconset';
  });

  it('all uniquely named', function() {
    const allIcons = {};
    for (let i = 0; i < iconsetNames.length; i++) {
      const iconset = meta.byKey(iconsetNames[i]);
      expect(iconset).to.be.ok;

      const iconNames = iconset.getIconNames();
      expect(iconNames).to.not.be.empty;

      for (let j = 0; j < iconNames.length; j++) {
        const iconName = iconNames[j];
        const parts = iconName.split(':');

        expect(parts).to.have.length(2);
        expect(parts[0]).to.equal(iconsetNames[i]);
        expect(parts[1]).to.have.length.at.least(1);

        expect(allIcons[iconName]).to.be.equal(undefined);
        allIcons[iconName] = true;
      }
    }

    // Sanity check.
    expect(Object.getOwnPropertyNames(allIcons))
      .to.have.length.of.at.least(iconsetNames.length);
  });
});
