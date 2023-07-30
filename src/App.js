
import Home from './component/Home.jsx';

import DataProvider from './context/DataProvider.jsx';

function App() {
  return (
    <DataProvider>

      <Home />

    </DataProvider>
  )
}

export default App;
