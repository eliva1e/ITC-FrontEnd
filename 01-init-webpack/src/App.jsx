import { useState } from 'react';

function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
  );
}

export default App;
