import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from '../tab-panel-context';

export default class Tab extends Component {
    render() {
        const { tabIndex, tabHeader } = this.props;
        return (
            <Context.Consumer>{
                ({ onSelectedTabIndexChange, selectedTabIndex }) =>
                    <li className={`la-tabs-nav-list-item ${selectedTabIndex === tabIndex ? "isSelected" : ""}`}>
                        <a className={`la-tabs-nav-link`} onClick={() => onSelectedTabIndexChange(tabIndex)}>{tabHeader}</a>
                    </li>
            }</Context.Consumer>);
    }
};

Tab.defaultProps = {
    tabHeader: ""
}

Tab.propTypes = {
    tabHeader: PropTypes.string,
    tabIndex: PropTypes.number
}