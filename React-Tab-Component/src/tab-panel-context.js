import React from 'react';

export default React.createContext({
    selectedTabIndex: 0,
    onSelectedTabIndexChange: (tabIndex) => { }
});