import { useState, useEffect } from 'react';
import colors from './common/colors';
import './common/app.scss';

function App() {
  const [currentIndexColor, setCurrentIndexColor] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    setCurrentIndexColor(colors[randomIndex]);
  }, []);

  return (
    <div id="app">
      <h1 id="current-color">{currentIndexColor}</h1>

      <div className="colors">
        {colors.map((color, index) => (
          <button
            key={`color-${index}`}
            className={color === currentIndexColor ? 'active' : ''}
            style={{ backgroundColor: color }}
            onClick={() => {
              document.body.style.backgroundColor = color;
              setCurrentIndexColor(color);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default App;
