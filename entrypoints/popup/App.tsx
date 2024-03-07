import { useState } from 'react';
import './App.css';
import { Deficiencies, Deficiency, VISUAL_DEFICIENCIES } from './deficiencies';

function App() {
  const [activeFilter, setActiveFilter] = useState<Deficiencies>(Deficiencies.Trichromacy);

  function handleActivateDeficiency(deficiency: Deficiencies) {
    setActiveFilter(deficiency);
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
