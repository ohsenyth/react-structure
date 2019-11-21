import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Skeleton';

describe('Skeleton', () => {
  it('should render correctly', () => {
    const component = shallow(<Loading />);
  
    expect(component).toMatchSnapshot();
  });
});