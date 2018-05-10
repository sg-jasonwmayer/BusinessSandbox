/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import LeftPointerIcon from './LeftPointerIcon';

/**
 * The actual component unit test
 */
describe('LeftPointerIcon', function () {
  describe('smoke test', function () {
    let wrapper;

    beforeEach(function () {
      wrapper = shallow(<LeftPointerIcon />);
    });

    it('should display a LeftPointerIcon', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
