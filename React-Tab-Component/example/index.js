import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { LaTabs, LaTab } from '../src';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTabIndex: 1 };
    }

    render() {
        return (
            <div>
                <h5>Tab panel selected by default</h5>
                <LaTabs>
                    <LaTab tabHeader="head1">Content Tab1</LaTab>
                    <LaTab tabHeader="head2">Content Tab2</LaTab>
                    <LaTab tabHeader="head3">Content Tab3</LaTab>
                </LaTabs>
                <hr />
                <h5>Tab panel selected by setting</h5>
                <LaTabs selectedTabIndex={this.state.selectedTabIndex} onSelectedTabIndexChange={tabIndex => this.setState({ selectedTabIndex: tabIndex })}>
                    <LaTab tabIndex={3} tabHeader="head1">Content Tab1</LaTab>
                    <LaTab tabIndex={1} tabHeader="head2">Content Tab2</LaTab>
                    <LaTab tabIndex={2} tabHeader="head3">Content Tab3</LaTab>
                </LaTabs>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));