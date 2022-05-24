import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';
import { AdminRoom} from './pages/AdminRoom';

import { AuthContenxtProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter> 
      <AuthContenxtProvider>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/rooms/new" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />

          <Route path="/admin/rooms/:id" element={<AdminRoom />} />
        </Routes>
      </AuthContenxtProvider>
    </BrowserRouter>
  );
}

export default App;
