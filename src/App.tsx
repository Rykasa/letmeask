import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

import { AuthContenxtProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter> 
      <AuthContenxtProvider>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </AuthContenxtProvider>
    </BrowserRouter>
  );
}

export default App;
