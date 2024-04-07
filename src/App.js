import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FlashcardScreen from './screens/FlashcardScreen';
import SelectFlashcardSetScreen from './screens/SelectFlashcardSetScreen';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SelectFlashcardSetScreen />} />
        <Route path="/flashcards/" element={<FlashcardScreen />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
