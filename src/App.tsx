import { useCallback, useState } from 'react';
import './App.css';
import { Message, popup } from './components/popup';
import { Snackbar } from './components/snackBar';
import SubComponent from './components/subComponent';

function App() {

  const [messages, setMessages] = useState([] as Message[]);

  const [debounceHandle, setDebounceHandle] = useState<NodeJS.Timeout>();
  
  const clickHandler = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    e => {
      clearTimeout(debounceHandle);
      setDebounceHandle(
        setTimeout(() => {
          const type = Math.floor(Math.random() * 4);
          const msg = popup(Date.now(), 'popup from parent component', type);
          setMessages([...msg]);
        }, 500)
      );
    },
    [debounceHandle]
    );

  return (
    <div className="App">
      <header className="App-header">
        <h3>It's parent component here</h3>
        <p>
          <button onClick={clickHandler}>click here to show popup</button>
        </p>
        <SubComponent clickHandler={clickHandler} />
        {/* define placeholder to display snackbar */}
        <Snackbar messages={messages} duration={3000} />
      </header>
    </div>
  );
}

export default App;
