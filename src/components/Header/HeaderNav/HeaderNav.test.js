import React from 'react';
import { shallow } from 'enzyme';

import HeaderNav from './HeaderNav';

describe('HeaderNavComponent', () => {
    it('should render correctly', () => {
        const component = shallow(<HeaderNav />);

        expect(component).toMatchSnapshot();
    })
});