/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import FilterIcon from './FilterIcon';

/**
 * The actual component unit test
 */
describe('FilterIcon', function () {
  describe('smoke test', function () {
    let wrapper;
    let props;

    beforeEach(function () {
      props = {
        error: false,
      };

      wrapper = shallow(<FilterIcon {...props} />);
    });

    it('should display a FilterIcon', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props test', function () {
    let wrapper;
    let props;

    beforeEach(function () {
      props = {
        error: true,
      };

      wrapper = mount(<FilterIcon {...props} />);
    });

    it('should return true for an error prop', function () {
      expect(wrapper.prop('error')).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
