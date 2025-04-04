import { GlobalProvider } from './context/GlobalContext';
import Main from './components/Main';

export default function App() {
  return (
    <>
      <GlobalProvider>
        <Main />
      </GlobalProvider>
    </>
  )
}