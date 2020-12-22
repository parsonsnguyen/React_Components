import React from 'react';
import Tabs from '../Tabs';
import Tab from '../Tab';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('renders correctly:', () => {
    test('render `Tab` for each item in props.children', () => {
       const wrapper = shallow(<Tabs><Tab>hello</Tab><Tab>world</Tab></Tabs>);
       expect(wrapper.find('Tab')).toHaveLength(2);
    });
});

describe('getDerivedStateFromProps', () => {
    test('props are not given selectedTabIndex: should be return null', () => {
        const givenProps = {};
        const result = Tabs.getDerivedStateFromProps(givenProps);
        expect(result).toBeNull();
    });

    test('props are given selectedTabIndex: should be return object', () => {
        const givenProps = {selectedTabIndex:1};
        const result = Tabs.getDerivedStateFromProps(givenProps);
        expect(result).toEqual({ selectedTabIndex: givenProps.selectedTabIndex });
    });

});

describe('onSelectedTabIndexChange:', () => {
    test('Toggle selectedTabIndex', () => {
        const component = new Tabs({ children: [<Tab>hello</Tab>, <Tab>world</Tab>]});
        component.setState = jest.fn();
        component.onSelectedTabIndexChange(999);
        expect(component.setState).toBeCalledWith({selectedTabIndex: 999});
    });
});