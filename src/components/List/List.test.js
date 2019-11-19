import React from 'react';
import { shallow } from 'enzyme';

import List from './List';

describe('List', () => {
    it('should render correctly', () => {
        const component = shallow(<List></List>);

        expect(component).toMatchSnapshot();
    });

    it('should render a list of items as TableRow', () => {
    const mockProducts = [
        {id: 1, name: 'From Test Project A', description: 'This is a description', createdDate: '2019/10/15 15:00'},
        {id: 2, name: 'From Test Project B', description: 'Description B', createdDate: '2019/10/15 18:00'},
    ];
  const wrapper = shallow(<List items={mockProducts}/>);
  expect(wrapper.find('TableCell').length).toEqual(mockProducts.length); // 3
});
});