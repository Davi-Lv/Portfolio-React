import React, { createContext, useState } from 'react';

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('sobre');

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabContext.Provider>
    );
};