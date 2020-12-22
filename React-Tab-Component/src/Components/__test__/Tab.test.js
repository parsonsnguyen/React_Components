import React from 'react'
import Tab from '../Tab'
import Context from '../../tab-panel-context'
import rerender from 'react-test-renderer'

describe('Tab: ', () => {
    test('renders correctly', () => {
        const component = rerender
            .create(
                <Context.Provider value={({ onSelectedTabIndexChange: jest.fn() })}>
                    <Tab tabIndex={0} tabHeader="tab-header">Content</Tab>
                </Context.Provider>
            );
        expect(component.toJSON()).toMatchSnapshot();
    });
    
    test('has selectedTabIndex equals to tabIndex: className should contain isSelected value', () => {
        const dumnmyIndex = 999;
        const component = rerender
            .create(
                <Context.Provider value={({ onSelectedTabIndexChange: jest.fn(), selectedTabIndex: dumnmyIndex })}>
                    <Tab tabIndex={dumnmyIndex} tabHeader="tab-header">Content</Tab>
                </Context.Provider>
            );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test.skip('onSelectedTabIndexChange()', () => {
        const onSelectedTabIndexChange = jest.fn();
        const component = rerender
            .create(
                <Context.Provider value={({ onSelectedTabIndexChange: onSelectedTabIndexChange })}>
                    <Tab tabIndex={0} tabHeader="tab-header">Content</Tab>
                </Context.Provider>
            );
        console.log(component.toJSON().children[0].props);
        expect(component.toJSON().children[0].props.onClick).toBe(onSelectedTabIndexChange);
    });
});
