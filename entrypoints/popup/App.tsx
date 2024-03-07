import { useState } from 'react';
import './App.css';
import { Deficiencies, Deficiency, VISUAL_DEFICIENCIES } from './deficiencies';

function App() {
  const [activeFilter, setActiveFilter] = useState<Deficiencies>(Deficiencies.Trichromacy);

  /**
   * Manage deficiency set and toggle
   * @param deficiency Deficiencies
   */
  function handleActivateDeficiency(deficiency: Deficiencies) {
    if (deficiency === activeFilter && deficiency !== Deficiencies.Trichromacy) {
      setDeficiency(Deficiencies.Trichromacy);
    } else {
      setDeficiency(deficiency);
    }
  }

  /**
   * Set deficiency filter
   * @param deficiency Deficiencies
   */
  function setDeficiency(deficiency: Deficiencies) {
    setActiveFilter(deficiency);
    getTab(deficiency);
  }

  /**
   * Send deficiency type to browser tab to adjust colors
   * @param deficiency Deficiencies
   */
  async function getTab(deficiency: Deficiencies) {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });

    if (tabs[0].id) {
      browser.tabs.sendMessage(tabs[0].id, { type: 'msg_from_popup', value: deficiency });
    }
  }

  return (
    <>
      <h1>Colorblindness simulation</h1>

      <ul className="deficiencies">
        {VISUAL_DEFICIENCIES.map((deficiency: Deficiency) => (
          <li key={deficiency.value}>
            <button
              onClick={() => handleActivateDeficiency(deficiency.value)}
              className={`visual-deficiency${activeFilter === deficiency.value ? ' is-active' : ''}`}
              data-type={deficiency.value}>
              {deficiency.label}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
