/* global describe, it, expect, should, jest, beforeEach */
/* eslint-disable no-unused-vars */
import React from 'react';
import {shallow} from 'enzyme';
import Layout from './Layout';

describe('<Layout />', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Layout>Test child</Layout>
    );
    expect(component).toHaveLength(1);
  });

  it('should render children', () => {
    const child = <div>Test</div>;
    const component = shallow(
      <Layout>
        {child}
      </Layout>
    );
    expect(component.contains(child)).toBe(true);
  });
});
