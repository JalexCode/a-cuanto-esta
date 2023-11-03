import '../styesheets/combobox.css'

function AndroidComboBox ({ selectedOption, handleOptionChange, valuesMap, activeTab }) {
  
  return (
    <div className="android-combobox">
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="android-select">
            {Object.entries(valuesMap).map(([tabId, tabText]) => (
              tabId !== activeTab ? (
        <option value={tabId}>{tabText}</option>
              ) : null
      ))}
      </select>
    </div>
  );
};

export default AndroidComboBox;