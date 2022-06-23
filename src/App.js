import JotaiInput from './views/JotaiInput';
import Count from './views/Count';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import './App.css';

const darkModeAtom = atomWithStorage('darkMode', false)

function App() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  const updateTheme = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className={darkMode ? 'dark-d' : 'light-d'}>
      <div className="container">
      <div>
        <div className='text-center'>
          <h1>Welcome to {darkMode ? 'dark' : 'light'} mode</h1>
          <label class="switch">
            <input type="checkbox" onClick={updateTheme} />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <JotaiInput />
      <Count />
      </div>
    </div>
  );
}
export default App

