import React from 'react';
import '../styesheets/tabview.css';

function TabNavigation({ tabsMap, activeTab, handleTabClick, selectedOption }) {
  return (
    <div className="tab-navigation">
      {Object.entries(tabsMap).map(([tabId, tabText]) => (
        // Agregamos una condición para verificar si tabId es diferente de selectedOption
        tabId !== selectedOption && tabId !== 'CUP' ? (
          <div
            key={tabId}
            className={`tab ${activeTab === tabId ? 'active' : ''}`}
            onClick={() => handleTabClick(tabId)}
          >
            {tabText}
          </div>
        ) : null
      ))}
    </div>
  );
}

export default TabNavigation;