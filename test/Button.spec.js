import Button from '../src/components/Button';
import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

describe('Button', () => {
  it('should render a button', () => {
    const wrapper = shallow(<Button>Hello</Button>);

    expect(wrapper.containsMatchingElement(<button>Hello</button>)).toExist();
  });
});
