import React, { Component } from 'react';
import Tab from './Tab';
import Context from '../tab-panel-context';
import { mergeClassName } from '../utils';

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedTabIndex: props.selectedTabIndex || this.getFirstChildIndex() };
        this.onSelectedTabIndexChange = this.onSelectedTabIndexChange.bind(this);
    }

    static getDerivedStateFromProps(props) {
        if (props.selectedTabIndex !== undefined) {
            return { selectedTabIndex: props.selectedTabIndex };
        }

        return null;
    }

    getFirstChildIndex() {
        return this.props.children[0].props.tabIndex || 0;
    }

    renderSelectedTabContent() {
        const { selectedTabIndex } = this.state;
        const tab = this.props.children.find((tab, index) => (tab.props.tabIndex || index) === selectedTabIndex);

        return tab && tab.props.children;
    }

    onSelectedTabIndexChange(tabIndex) {
        this.setState({ selectedTabIndex: tabIndex });
    }

    render() {
        const { selectedTabIndex } = this.state;
        return (<Context.Provider value={(
            {
                selectedTabIndex: selectedTabIndex,
                onSelectedTabIndexChange: tabIndex => (this.props.onSelectedTabIndexChange || this.onSelectedTabIndexChange)(tabIndex)
            })}>
            <div className={mergeClassName(this.props, 'la-tabs')}>
                <div className="la-tabs-nav">
                    <ul className="la-tabs-nav-list">
                        {this.props.children.map((tab, index) =>
                            React.cloneElement(tab, { tabIndex: tab.props.tabIndex || index, key: index }))}
                    </ul>
                </div>
                <div className="la-tabs-selected-tab-content">
                    {this.renderSelectedTabContent()}
                </div>
            </div>
        </Context.Provider>);
    }
};

Tabs.propTypes = {
    children: (props, propName, componentName) => {
        const prop = props[propName]

        let error = null
        React.Children.forEach(prop, (child) => {
            if (child.type !== Tab) {
                error = new Error('`' + componentName + '` children should be of type `Tab`.');
            }
        })
        return error;
    }
}